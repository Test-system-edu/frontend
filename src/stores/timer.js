import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useTimeStore = defineStore('time', () => {
    const timer = reactive({
        hour: 0,
        minute: 0,
    })


    return { timer };
})
