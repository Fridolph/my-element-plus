export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'small';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonProps = Partial<ButtonBaseProps>;
type ButtonBaseProps = {
    type: ButtonType;
    size: ButtonSize;
    plain: boolean;
    round: boolean;
    circle: boolean;
    disabled: boolean;
    nativeType: NativeType;
    autofocus: boolean;
    icon: string;
    loading: boolean;
};
export interface ButtonInstance {
    ref: HTMLButtonElement;
}
export {};
