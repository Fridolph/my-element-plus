import { describe, test, expect, beforeEach } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import Switch from './Switch.vue'

let wrapper: VueWrapper

describe('Switch.vue', () => {
  beforeEach(() => {
    wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    })
  })

  test('基本展示', () => {
    const input = wrapper.find('.vk-switch__input')
    const elem = input.element as HTMLInputElement
    expect(elem.checked).toBeFalsy()
    expect(input.exists()).toBeTruthy()
  })

  test('测试点击交互', async () => {
    const input = wrapper.find('.vk-switch__input')
    const elem = input.element as HTMLInputElement
    await input.trigger('click')
    expect(elem.checked).toBeTruthy()
    expect(wrapper.classes().includes('is-checked')).toBeTruthy()
  })
})
