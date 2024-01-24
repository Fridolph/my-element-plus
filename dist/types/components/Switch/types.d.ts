type SwitchValueType = boolean | string | number;
export interface SwitchProps {
    modelValue: SwitchValueType;
    size?: 'small' | 'large';
    disabled?: boolean;
    activeValue?: SwitchValueType;
    inactiveValue?: SwitchValueType;
    activeText?: string;
    inactiveText?: string;
    name?: string;
    id?: string;
}
export interface SwitchEvents {
    (e: 'change', value: SwitchValueType): void;
    (e: 'update:modelValue', value: SwitchValueType): void;
}
export {};
