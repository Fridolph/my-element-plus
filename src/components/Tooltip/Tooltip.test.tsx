import { describe, test, expect, vi, beforeAll, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

vi.mock('@popperjs/core')

const onVisibleChange = vi.fn()

let wrapper: VueWrapper
let triggerElem: DOMWrapper<Element>

describe('Tooltip.vue', () => {
  beforeAll(() => {
    wrapper = mount(
      () => (
        // @ts-ignore
        <div>
          {/* @ts-ignore */}
          <div id="outside"></div>
          <Tooltip content="tooltip content" trigger="click" onVisibleChange={onVisibleChange}>
            {/* @ts-ignore */}
            <button id="trigger">Trigger</button>
          </Tooltip>
          {/* @ts-ignore */}
        </div>
      ),
      {
        attachTo: document.body,
      }
    )
  })

  beforeEach(() => {
    vi.useFakeTimers()
  })

  test('测试基本功能', () => {
    triggerElem = wrapper.find('#trigger')
    expect(triggerElem.exists()).toBeTruthy()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
  })

  // 静态测试
  test('测试trigger为click的点击行为', async () => {
    triggerElem = wrapper.find('#trigger')
    // 测试点击行为
    console.log('before click: ', wrapper.html())
    triggerElem.trigger('click')
    // 使用vi提供的useFakeTimers vi.runAllTimers 模拟定时时间
    await vi.runAllTimers()
    console.log('after click: ', wrapper.html())
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.find('.vk-tooltip__popper').text()).toBe('tooltip content')
    expect(onVisibleChange).toHaveBeenCalledWith(true)

    wrapper.find('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})
