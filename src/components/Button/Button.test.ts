import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'

describe('Button.vue', () => {
  test('base >>> Props, callback', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })

    // console.log(wrapper.html())
    expect(wrapper.classes()).toContain('vk-button--primary')
    // slots查询方法： 1.get: 若找不到中断测试;  2.find：不会中断继续测试
    expect(wrapper.get('button').text()).toBe('button')
    // 测试events
    wrapper.get('button').trigger('click')
    // console.log('wrapper.emitted() ', wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  
  test('button >>> disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      },
      slots: {
        default: 'button'
      }
    })
    // 使用attributes
    // expect(wrapper.attributes('disabled')).toBeDefined()
    // 通过find().element 拿到原生DOM节点
    expect(wrapper.find('button').element.disabled).toBeDefined()
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })

  test('button >>> icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slosts: {
        default: 'icon'
      },
      global: {
        // 将复杂结构模拟为自定义的简单结构
        stubs: ['FontAwesomeIcon']
      }
    })
    // console.log('wrapper icon', wrapper.html())
    const IConElem =  wrapper.findComponent(FontAwesomeIcon)
    expect(IConElem.exists()).toBeTruthy()
    expect(IConElem.attributes('icon')).toBe('arrow-up')
  })
  
  test('button >>> loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon']
      }
    })    
    // console.log('wrapper >>> loading ', wrapper.html());
    const iconElem = wrapper.findComponent(Icon)    
    // console.log('iconElem: ', iconElem.html());
    expect(iconElem.exists()).toBeTruthy()
    expect(iconElem.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
