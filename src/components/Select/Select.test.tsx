import { describe, test, expect, vi, beforeAll, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Select from './Select.vue'

vi.mock('@popperjs/core')

let wrapper: VueWrapper
let triggerElem: DOMWrapper<Element>
const options = [
  { label: '选项一', value: '1', disabled: false },
  { label: '选项二', value: '2', disabled: true },
  { label: '选项三', value: '3', disabled: false },
]
const onVisibleChange = vi.fn()

describe('Select.vue', () => {
  test('测试基本功能', () => {
    wrapper = mount(
      () => <Select modelValue={"1"} options={options} />,
      {
        attachTo: document.body,
        global: {
          stubs: ['Icon']
        }
      },      
    )
    
    // const inputElem = wrapper.find('.vk-input')
    // const ulElem = wrapper.find('.vk-select__menu')
    // inputElem.trigger('focus')
    // console.log('---------------------inputElem:\n', ulElem.html());
    // expect(triggerElem.exists()).toBeTruthy()
    // expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
  })
})
