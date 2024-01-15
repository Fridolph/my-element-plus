import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

export type CollapseProps = {
  modelValue: NameType[]
  accorrdion?: boolean // 是否支持手风琴模式
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (name: NameType) => void
}

export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[]): void
  (e: 'change', values: NameType[]): void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContext')

export type CollapseItemProps = {
  name: string
  title?: string
  disabled?: boolean
}
