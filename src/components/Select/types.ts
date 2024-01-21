import { type VNode } from 'vue'

export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectStates {
  inputValue: string
  selectedOption: null | SelectOption
  isHover: boolean
}

export interface SelectProps {
  modelValue: string // v-model
  options: SelectOption[] // 选项
  placeholder?: string
  disabled?: boolean
  clearable?: boolean // 可清空
  multiple?: boolean // 支持多选
  filterable?: boolean // 可筛选
  filterMethod: () => void
  remoteMethod?: (value: any) => Promise<SelectOption[]>
  renderLabel?: (option: SelectOption) => VNode // 自定义label
}

export interface SelectEmits {
  (e: 'change', value: string): void
  (e: 'visible-change', value: boolean): void
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}

export type RenderLabelFunc = (option: SelectOption) => VNode