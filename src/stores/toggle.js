import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('counter', () => {
  const userNav = ref(false);;
  console.log(localStorage.getItem('darkMode')=='false', typeof localStorage.getItem('darkMode'), 'dsdhgfdarsdfghjkl');
  if (localStorage.getItem('darkMode')=='false'){
    userNav.value = false;
  }else{
    userNav.value = true;
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
