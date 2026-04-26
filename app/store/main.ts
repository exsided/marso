import {defineStore} from 'pinia';

type UID = string|number

export const useMainStore = defineStore('main', () => {
    const disableScrollUids = ref<UID[]>([]);

    const disableScroll = (uid: string | number) => {
        if (!disableScrollUids.value.includes(uid)) {
            disableScrollUids.value.push(uid);
        }
    }
    const enableScroll = (uid: string | number) => {
        if (disableScrollUids.value.includes(uid)) {
            disableScrollUids.value = disableScrollUids.value.filter(el => el !== uid);
        }
    }

    return {
        disableScrollUids,
        disableScroll,
        enableScroll
    };
});
