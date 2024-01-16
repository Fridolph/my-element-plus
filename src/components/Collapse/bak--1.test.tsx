import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

describe('Collapse.vue', () => {
  test('basic', async () => {
    const wrapper = mount(Collapse, {
      props: {
        modelValue: ['a'],
      },
      slots: {
        default: (
          <>
            <CollapseItem name="a" title="title A">
              content A
            </CollapseItem>
            <CollapseItem name="b" title="title B">
              content B
            </CollapseItem>
            <CollapseItem disabled name="c" title="title C">
              content C
            </CollapseItem>
          </>
        ),
      },
      global: {
        stubs: ['Icon'],
      },
      attachTo: document.body,
    })

    const headers = wrapper.findAll('.vk-collapse-item__header')
    const contents = wrapper.findAll('.vk-collapse-item__content')

    // 判断长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    // 文本
    expect(headers[0].text()).toBe('title A')
    expect(contents[1].text()).toBe('content B')

    // 内容是否可见
    expect(contents[0].isVisible()).toBeTruthy()
    expect(contents[1].isVisible()).not.toBeTruthy()

    // 测试行为
    await headers[0].trigger('click')
    expect(contents[0].isVisible()).toBeFalsy()
    await headers[1].trigger('click')
    expect(contents[1].isVisible()).toBeTruthy()
    // 第二种事件的测试方法
    expect(wrapper.emitted()).toHaveProperty('change')
    const changeEvent = wrapper.emitted('change')
    

    // 判断disabled
    await headers[2].trigger('click')
    expect(headers[2].classes()).toContain('is-disabled')
    expect(contents[2].isVisible()).toBeFalsy()
  })
})
