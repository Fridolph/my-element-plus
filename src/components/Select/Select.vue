<template>
  <div
    class="vk-select"
    :class="{ 'is-disabled': disabled }"
    @click="toggleUl"
    @mouseenter="states.isHover = true"
    @mouseleave="states.isHover = false"
  >
    <Tooltip
      placement="bottom"
      manual
      ref="tooltipRef"
      :popper-options="popperOptions"
      @click-outside="controlUl(false)"
    >
      <Input
        ref="inputRef"
        v-model="states.inputValue"
        :disabled="disabled"
        :placeholder="filteredPlaceholder"
        :readonly="!props.filterable || !isUlShow"
        @input="onFilter"
      >
        <template #suffix>
          <Icon
            v-if="showClearIcon"
            icon="circle-xmark"
            class="vk-select__clear"
            @mousedown.prevent="NOOP"
            @click.stop="handleClear"
          />
          <Icon v-else icon="angle-down" class="header-angle" :class="{ 'is-active': isUlShow }" />
        </template>
      </Input>
      <template #content>
        <ul class="vk-select__menu">
          <li class="vk-select__menu-item" v-if="filteredOptions.length === 0">未找到筛选项</li>          
          <template v-else v-for="(item, index) in filteredOptions" :key="index">
            <li
              class="vk-select__menu-item"
              :class="{
                'is-disabled': item.disabled,
                'is-selected': states.selectedOption?.value === item.value,
              }"
              :id="`select-item-${item.value}`"
              @click.stop="itemSelect(item)"
            >
              <RenderVnode :v-node="renderLabel ? renderLabel(item) : item.label" />
              <!-- <span v-if="states.selectedOption?.value === item.value">Selected!!!</span> -->
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, type Ref } from 'vue'
import type { SelectStates, SelectOption, SelectProps, SelectEmits } from './types'
import { isFunction } from 'lodash-es'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import Input from '../Input/Input.vue'
import type { InputInstance } from '../Input/types'
import Icon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode'
import { stripVTControlCharacters } from 'util'

defineOptions({ name: 'VkSelect' })
const props = withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  clearable: true,
  multiple: false,
  placeholder: '请选择',
  filterable: false,
})
const emits = defineEmits<SelectEmits>()

const initialOption = findOption(props.modelValue)
const tooltipRef = ref() as Ref<TooltipInstance>
const inputRef = ref() as Ref<InputInstance>
const isUlShow = ref(false)
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: 'sameWidth',
      enabled: true,
      fn: ({ state }: { state: any }) => {
        state.styles.popper.width = `${state.rects.reference.width}px`
      },
      phase: 'beforeWrite',
      requires: ['computeStyles'],
    },
  ],
}
const filteredOptions = ref(props.options)
const filteredPlaceholder = computed(() => {
  return props.filterable && states.selectedOption && isUlShow.value
    ? states.selectedOption.label
    : props.placeholder
})
watch(
  () => props.options,
  (newVal) => {
    filteredOptions.value = newVal
  }
)
const states = reactive<SelectStates>({
  inputValue: initialOption ? initialOption.label : '',
  selectedOption: initialOption,
  isHover: false,
})
const showClearIcon = computed(
  () =>
    // 之前继承 Input 的clearable 但这样会有问题：
    // 其emits的方法都是Input中的，这里我们同样需要emits 一些值的更改
    // 所以Select里又单独写了一遍clear的实现逻辑
    props.clearable && states.isHover && states.selectedOption && states.inputValue.trim() !== ''
)

function findOption(value: string) {
  const option = props.options.find((option) => option.value === value)
  return option ?? null
}
function controlUl(show: boolean) {
  if (show) {
    // filter模式 且 之前选择过对应的值
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    // filter模式 每次点击都 展示全部默认列表
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    // filter模式 - blur时要将原来选择的值 拿回来
    if (props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
  }
  isUlShow.value = show
  emits('visible-change', show)
}
function toggleUl() {
  if (props.disabled) return
  if (isUlShow.value) {
    controlUl(false)
  } else {
    controlUl(true)
  }
}
function generateFilterOptions(searchValue: string) {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue)
  } else {
    filteredOptions.value = props.options.filter((option) => option.label.includes(searchValue))
  }
}
function onFilter() {
  generateFilterOptions(states.inputValue)
}
function itemSelect(e: SelectOption) {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  controlUl(false)
  // inputRef.value.ref!.focus()
}
function handleClear() {
  // console.log('handleClear: 当前清空项为', findOption(props.modelValue))
  states.inputValue = ''
  states.selectedOption = null
  emits('change', '')
  emits('update:modelValue', '')
  emits('clear')
}
const NOOP = () => {}
</script>
