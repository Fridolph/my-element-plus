<template>
  <form class="vk-form">
    <slot />
  </form>
</template>
<script setup lang="ts">
import { provide } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type {
  FormProps,
  FormItemContext,
  FormContext,
  FormValidateFailure,
  FormInstance,
} from './types'
import { formContextKey } from './types'
const props = defineProps<FormProps>()
defineOptions({
  name: 'VkForm',
})

const fields: FormItemContext[] = []
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}
const resetFields = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => field.resetField())
}
const clearValidate = (keys: string[] = []) => {
  const filterArr = keys.length > 0 ? fields.filter((field) => keys.includes(field.prop)) : fields
  filterArr.forEach((field) => field.clearValidate())
}
async function validateForm() {
  // console.log('validateForm: ', fields)
  let validationErrors: ValidateFieldsError = {}
  // 用Promise.all() 任意一个错误 就会中断Promise从而返回
  // 这里我们用一个新的API Promise.allSettled() 拿到所有Promise执行完结果组成的数组
  for (const field of fields) {
    try {
      await field.validate()
    } catch (e) {
      const err = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...err.fields,
      }
    }
  }
  // validationErrors 若为空，则说明没有错误
  if (Object.keys(validationErrors).length === 0) return true

  return Promise.reject(validationErrors)
}

provide(formContextKey, {
  ...props,
  addField,
  removeField,
})

defineExpose<FormInstance>({
  validate: validateForm,
  resetFields,
  clearValidate,
})
</script>
