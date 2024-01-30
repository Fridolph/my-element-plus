import type { FormItemProps, ValidateStatusProp } from './types';
declare function validate(trigger?: string): Promise<boolean | void>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<FormItemProps>, {
    validateStatus: ValidateStatusProp;
    validate: (trigger?: string) => Promise<any>;
    resetField(): void;
    clearValidate(): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<FormItemProps>>>, {}, {}>, {
    label?(_: {
        label: string;
    }): any;
    default?(_: {
        validate: typeof validate;
    }): any;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
