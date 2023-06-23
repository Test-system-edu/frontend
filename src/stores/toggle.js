import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('counter', () => {
  const userNav = ref(false)
  // Toggle = computed(() => userNav.value)
  return { userNav }
})
