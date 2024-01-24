import { computed, defineComponent, Fragment, ref } from 'vue'
import type { PropType } from 'vue'
import type { Placement, Options } from '@popperjs/core'
import type { MenuOptions } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
export default defineComponent({
  name: 'VkDropdown',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom',
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
    transition: {
      type: String,
      default: 'fade',
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    popperOptions: {
      type: Object as PropType<Options>,
    },
    menuOptions: {
      type: Array as PropType<MenuOptions[]>,
      required: true,
    },
    hideAfterClick: {
      type: Boolean,
      default: true,
    },
    manual: {
      type: Boolean,
    },
  },
  emits: ['visible-change', 'select'],
  setup(props, { slots, emit, expose }) {
    const tooltipRef = ref<TooltipInstance | null>(null)
    const itemClick = (e: MenuOptions) => {
      if (e.disabled) return
      emit('select', e)
      if (props.hideAfterClick) {
        tooltipRef.value?.hide()
      }
    }
    const visibleChange = (e: boolean) => {
      emit('visible-change', e)
    }
    const options = computed(() => {
      return props.menuOptions.map((item) => {
        return (
          <Fragment key={item.key}>
            {/* @ts-ignore */}
            {item.divided ?? <li role="separator" class="divided-placeholder" />}
            {/* @ts-ignore */}
            <li
              class={{
                'vk-dropdown__item': true,
                'is-disabled': item.disabled,
                'is-divided': item.divided,
              }}
              id={`dropdown-item-${item.key}`}
              onClick={() => itemClick(item)}
            >
              {item.label}
              {/* @ts-ignore */}
            </li>
          </Fragment>
        )
      })
    })
    expose({
      show: () => tooltipRef.value?.show(),
      hide: () => tooltipRef.value?.hide(),
    })
    return () => (
      // @ts-ignore
      <div class="vk-dropdown">
        <Tooltip
          ref={tooltipRef}
          trigger={props.trigger}
          placement={props.placement}
          popperOptions={props.popperOptions}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          manual={props.manual}
          onVisibleChange={visibleChange}
        >
          {{
            default: () => slots.default && slots.default(),
            // @ts-ignore
            content: () => <ul class="vk-dropdown__menu">{options.value}</ul>,
          }}
        </Tooltip>
        {/* @ts-ignore */}
      </div>
    )
  },
})
