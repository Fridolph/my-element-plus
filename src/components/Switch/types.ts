// 一开始modelValue 只支持boolean，为了满足更多应用场景，添加 string 和 number 类型
type SwitchValueType = boolean | string | number

export interface SwitchProps {
  modelValue: SwitchValueType
  size?: 'small' | 'large'
  disabled?: boolean
  activeValue?: SwitchValueType
  inactiveValue?: SwitchValueType
  activeText?: string
  inactiveText?: string
  name?: string
  id?: string
}

export interface SwitchEvents {
  (e: 'change', value: SwitchValueType): void
  (e: 'update:modelValue', value: SwitchValueType): void
}
