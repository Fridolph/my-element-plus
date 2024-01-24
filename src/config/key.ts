import type { InjectionKey, Ref } from 'vue'

export const langKey = Symbol() as InjectionKey<Ref<string>>
export const userKey = Symbol() as InjectionKey<{ name: string }>
