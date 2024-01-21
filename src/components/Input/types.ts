export interface InputProps {
  modelValue: string
  type?: 'text' | 'textarea' | 'password'
  size?: 'large' | 'small' | 'normal'
  clearable?: boolean
  showPassword?: boolean
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  autocomplete?: string
  autofocus?: boolean
  form?: string
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
  // input事件 值有变化立即触发
  (e: 'input', value: string): void
  // input上的值有变化，且blur才触发
  (e: 'change', value: string): void
  (e: 'focus', value: FocusEvent): void
  (e: 'blur', value: FocusEvent): void
  (e: 'clear'): void
}

export interface InputInstance {
  ref: HTMLInputElement | HTMLTextAreaElement
}