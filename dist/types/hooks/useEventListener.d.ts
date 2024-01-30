import type { Ref } from 'vue';
export default function useEventListener(target: Ref<EventTarget | null> | EventTarget, event: string, handler: (e: Event) => any): void;
