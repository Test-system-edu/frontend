<template>
  <!------------------------------------------ Dashboard placeholder ------------------------------------------>
  <div class="px-2 pt-4 rounded-lg">
    <div class="grid grid-cols-4 gap-4 mb-4">
      <div
        v-for="i in 4"
        :key="i"
        class="animate-pulse flex items-center justify-center h-20 rounded-lg bg-gray-700 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="i in 4"
        :key="i"
        class="animate-pulse flex items-center justify-center rounded-lg h-[23.9rem] bg-gray-700 dark:bg-gray-800"
      ></div>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-4">
      <div
        v-for="i in 4"
        :key="i"
        class="animate-pulse flex items-center justify-center h-20 rounded-lg bg-gray-700 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
