import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('toggle', () => {
  const userNav = ref(false);;
  if (localStorage.getItem('darkMode') == 'true') {
    userNav.value = true;
  } else {
    userNav.value = false;
  }

  const setDarkMode = () => {
    localStorage.setItem('darkMode', true);
    userNav.value = true;
  }

  const setLightMode = () => {
    localStorage.setItem('darkMode', false);
    userNav.value = false;
  }

  return { userNav, setDarkMode, setLightMode };
})
