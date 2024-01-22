<template>
  <div class="vk-form-item">
    <label class="vk-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="vk-form-item__content">
      <slot></slot>
      <button style="border: 1px solid #ccc" @click.prevent="validate">
        测试 - {{ validateStatus.state }}
      </button>
      <p>{{ innerValue }} -- {{ itemRules }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, inject, provide } from 'vue'
import type {
  FormItemProps,
  FormItemEmits,
  FormValidateFailure,
  FormItemContext,
  ValidateStatus,
} from './types'
import { formContextKey, formItemContextKey } from './types'
import { isNil } from 'lodash-es'
import Schema from 'async-validator'
defineOptions({ name: 'VkFormItem' })
const props = withDefaults(defineProps<FormItemProps>(), {})
// const emits = defineEmits<FormItemEmits>()
const formContext = inject(formContextKey)
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})

const itemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  } else {
    return []
  }
})

// 验证相关逻辑
const validateStatus = reactive<ValidateStatus>({
  state: 'init',
  errorMsg: '',
  loading: false,
})

function validate() {
  const modelName = props.prop
  if (modelName) {
    const validator = new Schema({
      [modelName]: itemRules.value,
    })
    validateStatus.loading = true
    validator
      .validate({ [modelName]: innerValue.value })
      .then(() => {
        console.log('通过了测试')
        validateStatus.state = 'success'
      })
      .catch(({ errors, fields }: FormValidateFailure) => {
        console.log('errors: ', errors)
        console.log('fields: ', fields)
        validateStatus.state = 'fail'
        validateStatus.errorMsg = errors && errors.length > 0 ? errors[0]!.message : ''
      })
  }
}

const context: FormItemContext = {
  validate
}

provide(formItemContextKey, context)
</script>
