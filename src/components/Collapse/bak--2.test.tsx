import { describe, expect, test, vi } from 'vitest'
// import { h } from 'vue'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

describe('Collapse.vue', () => {
  // test('basic', () => {
  //   const wrapper = mount(Collapse, {
  //     props: {
  //       modelValue: ['a']
  //     },
  //     slots: {
  //       default: h(CollapseItem, {
  //         name: 'a',
  //         title: 'title A'
  //       }, 'content A')
  //     },
  //     global: {
  //       stubs: ['Icon']
  //     }
  //   })
  //   console.log('wrapper: ', wrapper.html());
  // })

  
  test('basic', async () => {
    // 测试回调添加
    const onChange = vi.fn()

    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']} onChange={onChange}>
          <CollapseItem name="a" title="title A">
            content A
          </CollapseItem>
          <CollapseItem name="b" title="title B">
            content B
          </CollapseItem>
          <CollapseItem disabled name="c" title="title C">
            content C
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon'],
        },
        // 用于解决样式不更新的问题
        attachTo: document.body,
      }
    )

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
    expect(onChange).toHaveBeenCalledWith([])
    await headers[1].trigger('click')
    expect(contents[1].isVisible()).toBeTruthy()
    expect(onChange).toHaveBeenLastCalledWith(['b'])

    // 判断disabled
    await headers[2].trigger('click')
    expect(headers[2].classes()).toContain('is-disabled')
    expect(contents[2].isVisible()).toBeFalsy()
  })
})
