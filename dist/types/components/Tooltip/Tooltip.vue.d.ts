import type { TooltipProps } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TooltipProps>, {
    placement: string;
    trigger: string;
    transition: string;
    openDelay: number;
    closeDelay: number;
}>, {
    show: () => void;
    hide: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "visible-change": (value: boolean) => void;
    "click-outside": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<TooltipProps>, {
    placement: string;
    trigger: string;
    transition: string;
    openDelay: number;
    closeDelay: number;
}>>> & {
    "onVisible-change"?: (value: boolean) => any;
    "onClick-outside"?: (value: boolean) => any;
}, {
    trigger: "click" | "hover";
    placement: import("@popperjs/core").Placement;
    openDelay: number;
    closeDelay: number;
}, {}>, {
    default?(_: {}): any;
    content?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
