import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimeStore = defineStore('time', () => {
    const time = ref(0);

    return { time };
})
