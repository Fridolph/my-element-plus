import type { InjectionKey } from 'vue'
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

export type FormRules = Record<string, RuleItem[]>

// Form
export interface FormProps {
  model: Record<string, any>
  rules: FormRules
}
export interface FormContext extends FormProps {
  validate: () => any
}
export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')

export interface FormEmits {
  (e: 'submit'): void
  (e: 'reset'): void
}

// FormItem
export interface FormItemProps {
  label?: string
  prop?: string
}

export interface FormItemContext extends FormItemProps {
  validate: () => any
}

export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formContextKey')


export interface FormItemEmits {}

export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

export interface ValidateStatus {
  state: 'init' | 'success' | 'fail'
  errorMsg: string | undefined
  loading: boolean
}
