import { describe, expect, test, beforeAll } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import Input from './Input.vue'

let wrapper: VueWrapper

describe('Input.vue', () => {
  beforeAll(() => {
    wrapper = mount(Input, {
      props: {
        type: 'text',
        modelValue: 'test',
        clearable: true,
      },
      slots: {
        prepend: 'prepend',
        prefix: 'prefix',
      },
      global: {
        stubs: ['Icon'],
      },
    })
  })

  test('基本展示', () => {
    // console.log('>>>>>>>>>>>>>>   wrapper.html()  >>>>>>>>>>>>>>>>>\n', wrapper.html());
    expect(wrapper.find('input').exists()).toBeTruthy()
    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  test('拿到slots，并正确渲染', () => {
    expect(wrapper.classes()).toContain('is-prepend')
    expect(wrapper.find('.vk-input__prepend').text()).toBe('prepend')
    expect(wrapper.classes()).toContain('is-prefix')
    expect(wrapper.find('.vk-input__prefix').text()).toBe('prefix')
  })

  test('支持v-model', async () => {
    // 初始值
    const input = wrapper.find('input')
    expect(input.element.value).toBe('test')
    // 更新后
    // 注：setValue是组合时间，会同时触发input 及 change
    await input.setValue('update')
    // console.log('>>>>>>>>>>>>>>  input.element.value  >>>>>>>>>>>>>>>>>\n', input.element.value);

    // @ts-ignore
    expect(wrapper.props()['modelValue']).toBe('update')
    expect(input.element.value).toBe('update')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    // v-model 的异步更新
    await wrapper.setProps({ modelValue: 'prop update' })
    expect(input.element.value).toBe('prop update')
  })

  test.only('支持点击清空', async () => {
    expect(wrapper.find('.vk-input__clear').exists()).toBeFalsy()
    await wrapper.trigger('mousemove')
    const input = wrapper.find('input')
    // 出现icon
    expect(wrapper.find('.vk-input__clear').exists()).toBeTruthy()
    // 点icon 清空文字
    await wrapper.find('.vk-input__clear').trigger('click')
    expect(input.element.value).toBe('')
    // 点击 值清空，这里不仅触发clear事件，对应input及change应该也被触发
    expect(wrapper.emitted()).toHaveProperty('clear')
    expect(wrapper.emitted()).toHaveProperty('mousemove')
    expect(wrapper.emitted()).toHaveProperty('input')
    expect(wrapper.emitted()).toHaveProperty('change')
    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    // console.log('wrapper.emitted(): ', wrapper.emitted());
  })

  test('支持切换密码显示', async () => {
    wrapper = mount(Input, {
      props: {
        modelValue: '',
        showPassword: true,
        type: 'password',
      },
      global: {
        stubs: ['Icon'],
      },
    })
    // 默认为空时，不出现icon
    expect(wrapper.find('.vk-input__password').exists()).toBeFalsy()
    const input = wrapper.find('input')
    expect(input.element.type).toBe('password')
    await input.setValue('123456')
    const eye = wrapper.find('.vk-input-icon__password')
    expect(eye.exists()).toBeTruthy()
    expect(eye.attributes('icon')).toBe('eye-slash')
    await eye.trigger('click')
    expect(input.element.type).toBe('text')
    expect(wrapper.find('.vk-input-icon__password').attributes('icon')).toBe('eye')
  })

  test('可渲染textarea', () => {
    wrapper = mount(Input, {
      props: {
        type: 'textarea',
        modelValue: '',
      },
    })
    expect(wrapper.find('textarea').exists()).toBeTruthy()
  })
})
