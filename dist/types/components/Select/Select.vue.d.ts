import type { SelectProps, SelectOption } from './types';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SelectProps>, {
    options: () => any[];
    placeholder: string;
    disabled: boolean;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: string) => void;
    "update:modelValue": (value: string) => void;
    "visible-change": (value: boolean) => void;
    clear: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SelectProps>, {
    options: () => any[];
    placeholder: string;
    disabled: boolean;
    clearable: boolean;
    filterable: boolean;
    multiple: boolean;
}>>> & {
    onChange?: (value: string) => any;
    "onUpdate:modelValue"?: (value: string) => any;
    "onVisible-change"?: (value: boolean) => any;
    onClear?: () => any;
}, {
    disabled: boolean;
    options: SelectOption[];
    clearable: boolean;
    placeholder: string;
    filterable: boolean;
    multiple: false;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
