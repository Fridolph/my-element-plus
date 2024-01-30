import type { Ref, InjectionKey } from 'vue';
export type NameType = string;
export type CollapseProps = {
    modelValue: NameType[];
    accordion?: boolean;
};
export interface CollapseContext {
    activeNames: Ref<NameType[]>;
    handleItemClick: (name: NameType) => void;
}
export interface CollapseEmits {
    (e: 'update:modelValue', values: NameType[]): void;
    (e: 'change', values: NameType[]): void;
}
export declare const collapseContextKey: InjectionKey<CollapseContext>;
export type CollapseItemProps = {
    name: string;
    title?: string;
    disabled?: boolean;
};
