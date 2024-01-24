import type { MessageProps, MessageContext } from './types';
export declare const createMessage: (props: MessageProps) => {
    id: string;
    vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    vm: import("vue").ComponentInternalInstance;
    props: {
        id: string;
        zIndex: number;
        onDestory: () => void;
        message?: string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        duration?: number;
        showClose?: boolean;
        type?: "success" | "warning" | "danger" | "info";
        transitionName?: string;
        offset?: number;
    };
    destory: () => void;
};
export declare const getLastInstance: () => MessageContext;
export declare const getLastBottomOffset: (id: string) => any;
export declare const closeAllInstances: () => void;
