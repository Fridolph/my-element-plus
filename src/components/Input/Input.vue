<template>
  <div
    class="vk-input"
    :class="{
      [`vk-input--${type}`]: type,
      [`vk-input--${size}`]: size,
      'is-disabled': disabled,
      'is-prepend': $slots.prepend,
      'is-append': $slots.append,
      'is-prefix': $slots.prefix,
      'is-suffix': $slots.suffix,
      'is-focus': isFocus,
    }"
    @mousemove="handleHover"
    @mouseleave="handleLeave"
  >
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="vk-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="vk-input__wrapper">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="vk-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <input
          v-model="innerValue"
          ref="inputRef"
          v-bind="attrs"
          :type="props.type === 'password' ? (passwordVisible ? 'text' : 'password') : 'text'"
          class="vk-input__inner"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :form="form"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        />
        <!-- suffix slot -->
        <span v-if="$slots.suffix || isHover" class="vk-input__suffix" @click="keepFocus">
          <Icon
            v-if="props.type === 'password' && !passwordVisible"
            icon="eye"
            class="vk-input-icon__password"
            @click="togglePasswordVisible"
          />
          <Icon
            v-if="props.type === 'password' && passwordVisible"
            icon="eye-slash"
            class="vk-input-icon__password"
            @click="togglePasswordVisible"
          />
          <Icon
            v-if="showClear"
            icon="circle-xmark"
            class="vk-input__clear"
            @click.stop="handleClear"
            @mousedown.prevent="NOOP"
          />
          <slot name="suffix"></slot>
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="vk-input__append">
        <slot name="append" />
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea
        v-model="innerValue"
        ref="inputRef"
        v-bind="attrs"
        class="vk-textarea__wrapper"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :form="form"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, watch, computed, useAttrs, nextTick, type Ref } from 'vue'
import type { InputProps, InputEmits } from './types'
import Icon from '../Icon/Icon.vue'
import { formItemContextKey } from '../Form/types';

defineOptions({
  name: 'VkInput',
  inheritAttrs: false,
})
const formItemContext = inject(formItemContextKey)
const attrs = useAttrs()
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'normal',
  modelValue: '',
  readonly: false,
  clearable: false,
  showPassword: false,
  autocomplete: 'off',
  placeholder: '',
})
const emits = defineEmits<InputEmits>()
const inputRef = ref() as Ref<HTMLInputElement>

const innerValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => {
    innerValue.value = newVal
  }
)

const isHover = ref(false)
const isFocus = ref(false)
const showClear = computed(() => {
  if (!props.disabled && props.clearable && isFocus.value && !!innerValue.value) return true
  if (!props.disabled && props.clearable && isHover.value && !!innerValue.value) return true
  return false
})

const passwordVisible = ref(false)

function togglePasswordVisible() {
  passwordVisible.value = !passwordVisible.value
}
function handleHover() {
  isHover.value = true
}
function handleLeave() {
  isHover.value = false
}
function handleInput() {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
}
function handleChange() {
  emits('change', innerValue.value)
}
function handleFocus(event: FocusEvent) {
  isFocus.value = true
  emits('focus', event)
}
async function keepFocus() {
  await nextTick()
  inputRef.value.focus()
}
function handleBlur(event: FocusEvent) {
  isFocus.value = false
  emits('blur', event)
  runValidation()
}
function handleClear() {
  innerValue.value = ''
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}
function NOOP() {}
function runValidation() {
  formItemContext?.validate().catch(e => console.log(e.errors))
}
defineExpose({
  ref: inputRef.value,
})
</script>
