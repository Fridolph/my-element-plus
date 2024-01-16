import { describe, expect, test, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

const onChange = vi.fn()
let wrapper: VueWrapper
let headers: DOMWrapper<Element>[]
let contents: DOMWrapper<Element>[]

describe('Collapse.vue', () => {
  beforeAll(async () => {
    wrapper = mount(
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
        attachTo: document.body,
      }
    )
    headers = wrapper.findAll('.vk-collapse-item__header')
    contents = wrapper.findAll('.vk-collapse-item__wrapper')
  })

  test('测试基础结构以及对应文本', () => {
    // 长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    // 文本
    expect(headers[0].text()).toBe('title A')
    // 内容
    expect(contents[1].text()).toBe('content B')
  })

  test('点击标题，展开/关闭相关内容', async () => {
    await headers[0].trigger('click')
    expect(contents[0].isVisible()).toBeFalsy()
    await headers[1].trigger('click')
    expect(contents[1].isVisible()).toBeTruthy()
  })

  test('发送正确的事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith([])
    expect(onChange).toHaveBeenLastCalledWith(['b'])
  })

  test('disabled 内容应该没有反应', async () => {
    // 用这方法  会清掉之前的调用状态
    onChange.mockClear()
    expect(headers[2].classes()).toContain('is-disabled')
    await headers[2].trigger('click')
    expect(contents[2].isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })
})

describe('Collapse.vue', () => {
  beforeAll(async () => {
    wrapper = mount(
      () => (
        <Collapse accordion={true} modelValue={['a']} onChange={onChange}>
          <CollapseItem name="a" title="accordion A">
            accordion content A
          </CollapseItem>
          <CollapseItem name="b" title="accordion B">
            accordion content B
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon'],
        },
        attachTo: document.body,
      }
    )
    headers = wrapper.findAll('.vk-collapse-item__header')
    contents = wrapper.findAll('.vk-collapse-item__wrapper')
  })

  test('accordion模式基本功能', () => {
    // 长度
    expect(headers.length).toBe(2)
    expect(contents.length).toBe(2)
    // 文本
    expect(headers[0].text()).toBe('accordion A')
    // 内容
    expect(contents[1].text()).toBe('accordion content B')
  })

  test('accordion模式 - 点击标题，展开/关闭相关内容', async () => {
    expect(contents[0].isVisible()).toBeTruthy()
    await headers[1].trigger('click')
    expect(contents[1].isVisible()).toBeTruthy()
    expect(contents[0].isVisible()).not.toBeTruthy()
  })
  
  test('发送正确的事件', async () => {
    onChange.mockClear()
    await headers[1].trigger('click')
    expect(onChange).toHaveBeenCalledTimes(1)    
  })
})
