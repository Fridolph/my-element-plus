import type { VNode } from 'vue';
export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export type RenderLabelFunc = (option: SelectOption) => VNode;
export type CustomFilterFunc = (value: string) => SelectOption[];
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOption[]>;
export interface SelectProps {
    modelValue: string;
    options?: SelectOption[];
    placeholder?: string;
    disabled: boolean;
    clearable?: boolean;
    renderLabel?: RenderLabelFunc;
    filterable?: boolean;
    filterMethod?: CustomFilterFunc;
    remote?: boolean;
    remoteMethod?: CustomFilterRemoteFunc;
    multiple?: false;
}
export interface SelectStates {
    inputValue: string;
    selectedOption: null | SelectOption;
    mouseHover: boolean;
    loading: boolean;
    highlightIndex: number;
}
export interface SelectEmits {
    (e: 'change', value: string): void;
    (e: 'update:modelValue', value: string): void;
    (e: 'visible-change', value: boolean): void;
    (e: 'clear'): void;
}
