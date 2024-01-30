import type { VNode } from 'vue';
import type { TooltipProps } from '../Tooltip/types';
export interface DropdownProps extends TooltipProps {
    menuOptions: MenuOptions[];
    hideAfterClick?: boolean;
}
export interface MenuOptions {
    label: string | VNode;
    key: string | number;
    disabled?: boolean;
    divided?: boolean;
}
export interface DropdownEmits {
    (e: 'visible-change', value: boolean): void;
    (e: 'select', value: MenuOptions): void;
}
export interface DropdownInstance {
    show: () => void;
    hide: () => void;
}
