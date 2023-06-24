<template>
  <div class="bg-gradient-to-r from-purple-300 hello to-blue-200">
    <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
      <div class="shadow-lg shadow-black overflow-hidden w-[70%] sm:rounded-3xl pb-8"
        :class="navbar.userNav ? 'bg-[#203843] text-white shadow-white' : 'bg-white'">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-9xl font-bold text-purple-400">404</h1>
          <h1 class="text-6xl font-medium py-8">Sahifa topilmadi!</h1>
          <p class="text-2xl pb-8 px-12 font-medium">
            Siz qidirayotgan sahifa mavjud emas.
          </p>
          <router-link to="/">
            <button
              class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-blue-400 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from '../../stores/toggle';
const navbar = useNavStore();
</script>
