declare const useZIndex: (initialValue?: number) => {
    initialZIndex: import("vue").Ref<number>;
    currentZIndex: import("vue").ComputedRef<number>;
    toNextZIndex: () => number;
};
export default useZIndex;
