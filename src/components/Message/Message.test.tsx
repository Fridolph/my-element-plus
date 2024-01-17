import { describe, test, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { type VueWrapper } from '@vue/test-utils'
import Message from './Message.vue'

const mock = vi.fn()

let wrapper: VueWrapper

describe('Message.vue', () => {
  beforeAll(() => {
    wrapper = mount(() => <Message message="hello world" duration={3000} showClose={true} />, {
      attachTo: document.body,
    })
  })

  test('1. 未填类型默认类型为 info ', () => {
    expect(wrapper.find('.vk-message--info').exists()).toBeTruthy()
  })

  test('2. message内容渲染一致', () => {
    expect(wrapper.find('.vk-message_content').text()).toBe('hello world')
  })

  test('3. 默认3秒自动关闭', async () => {
    // console.log('一开始的html>>>>\n', document.body.innerHTML)
    // vi.useFakeTimers()
    // setInterval(() => Promise.resolve().then(() => {
    //   console.log('应该自动关闭后>>>>>>>>>>\n', document.body.innerHTML)
    // }), 1000)
    // await vi.advanceTimersByTimeAsync(10000)    
    // expect(wrapper.find('.vk-message').text()).toBe('hello world')
  })

  test('4. 点击后关闭', async () => {    
    await wrapper.find('.vk-icon').trigger('click')
    // console.log('点击关闭后的html', document.body.innerHTML)
    expect(wrapper.find('.vk-message').isVisible()).toBeFalsy()

  })
})