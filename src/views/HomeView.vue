<template>
  <div>
    <header>
      <Navbar />
    </header>
    <Sidebar />
    <main
      class="bg-gray-200 mt-14 px-2 sm:ml-64 overflow-y-auto max-h-[93vh] overflow-hidden"
      :class="{ 'bg-white': navbar.userNav }"
    >
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { Sidebar, Navbar } from "../components";
import { useNavStore } from "../stores/toggle";
const navbar = useNavStore();
</script>

<style lang="scss" scoped></style>
