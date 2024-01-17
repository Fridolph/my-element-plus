import { describe, test, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Icon from './Icon.vue'

vi.mock('@popperjs/core')

const onClick = vi.fn()

let wrapper: VueWrapper

describe('Icon.vue', () => {
  beforeAll(() => {
    wrapper = mount(
      () => (
        <Icon icon="fa-solid fa-user" type="primary" size="lg" onClick={onClick}/>
      ),
      {
        attachTo: document.body,
      }
    )
  })

  test('测试基本功能', () => {
    expect(wrapper.classes().includes('vk-icon--primary')).toBeTruthy()
    // 可以被点击
    wrapper.trigger('click')
    expect(onClick).toHaveBeenCalled()
  })
})
