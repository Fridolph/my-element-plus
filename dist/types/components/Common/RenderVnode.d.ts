declare const RenderVnode: import("vue").DefineComponent<{
    vNode: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
}, () => string | Record<string, any>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    vNode: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
}>>, {}, {}>;
export default RenderVnode;
