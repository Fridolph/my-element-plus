import { describe, expect, test, vi } from 'vitest'
import { nextTick } from 'vue'
import { createMessage, closeAllInstances } from './createMessage'

describe('createMessage', () => {
  test('调用该方法应创建对应的 Message 组件', async () => {
    const instance = createMessage({ message: 'hello world', duration: 0 })
    // console.log('刚创建时 》》》', document.body.innerHTML)
    await rAF()
    expect(document.querySelector('.vk-message')).toBeTruthy()
    instance.destory()
    await rAF()
    // console.log('销毁后 >>> HTML', document.body.innerHTML)
    expect(document.querySelector('.vk-message')).toBeFalsy()
  })

  test('多次调用方法应创建多个实例对象', async () => {
    createMessage({ message: 'hello world', duration: 0 })
    createMessage({ message: 'hello message', duration: 0 })
    await rAF()
    const elements = document.querySelectorAll('.vk-message')
    expect(elements.length).toBe(2)
    closeAllInstances()
    await rAF()
    expect(document.querySelector('.vk-message')).toBeFalsy()
  })

  test('创建多个实例应该设置正确的offset', async () => {
    createMessage({ message: 'message 1', duration: 0, offset: 100 })
    createMessage({ message: 'message 2', duration: 0, offset: 50 })
    await rAF()
    const elements = document.querySelectorAll('.vk-message')
    expect(elements.length).toBe(2)
    const firstElementTop = getTopValue(elements[0])
    const secondElementTop = getTopValue(elements[1])
    // https://github.com/jsdom/jsdom/issues/1590
    // 在jsdom中，对应的height返回为0
    expect(firstElementTop).toBe(100)
    expect(secondElementTop).toBe(150)
  })
})

// 为了测试转换，我们需要使用
// 触发转换事件后等待 rAF()
async function rAF() {
  return new Promise((res) => {
    // window.requestAnimationFrame https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null)
        await nextTick()
      })
    })
  })
}

function getTopValue(elem: Element) {
  const styles = window.getComputedStyle(elem)
  const topValue = styles.getPropertyValue('top')
  return Number.parseFloat(topValue)
}
