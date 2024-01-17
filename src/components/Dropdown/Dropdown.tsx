import { defineComponent, computed, Fragment, ref } from 'vue'
import type { PropType } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { MenuOptions } from './types'
import type { TooltipInstance } from '../Tooltip/types'
import RenderVnode from '../Common/RenderVnode'

export default defineComponent({
  name: 'VkDropdown',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'click',
    },
    transition: {
      type: String,
      default: 'fade',
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    popperOptions: {
      type: Object as PropType<Partial<Options>>,
    },
    menuOptions: {
      type: Array as PropType<MenuOptions[]>,
      require: true,
    },
    hideAfterClick: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['visible-change', 'select'],
  setup(props, { slots, emit, expose }) {
    const tooltipRef = ref<TooltipInstance | null>(null)
    const itemClick = (e: MenuOptions) => {
      if (e.disabled) return

      emit('select', e)

      if (props.hideAfterClick && tooltipRef.value) {
        tooltipRef.value?.hide()
      }
    }
    const visibleChange = (e: boolean) => {
      emit('visible-change', e)
    }

    const options = computed(() => {
      return (
        props.menuOptions &&
        props.menuOptions.map((item) => {
          return (
            <Fragment key={item.key}>
              {item.divided ?? <li role="separator" class="divided-placeholder" />}
              <li
                class={{
                  'vk-dropdown__item': true,
                  'is-disabled': item.disabled,
                  'is-divided': item.divided,
                }}
                id={`dropdown-item-${item.key}`}
                onClikc={() => itemClick(item)}
              >
                {item.label}
              </li>
            </Fragment>
          )
        })
      )
    })

    expose({
      show: () => tooltipRef.value?.show(),
      hide: () => tooltipRef.value?.hide(),
    })

    return () => (
      <div class="vk-dropdown">
        <Tooltip
          trigger={props.trigger}
          placement={props.placement}
          popperOptions={props.popperOptions}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          ref="tooltipRef"
          onVisibleChange={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            content: () => <ul class="vk-dropdown__menu">{options.value}</ul>,
          }}
        </Tooltip>
      </div>
    )
  },
})
