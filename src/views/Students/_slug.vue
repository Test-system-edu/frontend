<template>
  <section>
    <!-- Slug start  -->

    <div>
      <div
        class="mt-[30px] border-[2px] border-dotted border-gray-300 bg-white rounded-[6px] p-[15px]"
      >
        <div class="flex justify-between items-center font-bold">
          <h1>
            <span>{{ store.id }}</span
            >. <span>{{ store.name }}</span>
          </h1>
          <button
            @click="router.back(-1)"
            class="btn shadow-lg rounded-lg px-5 py-2.5 text-white focus:ring-2"
          >
            Orqaga qaytish
          </button>
        </div>
        <div class="grid grid-cols-4 gap-5 h-[250px] mt-[20px] mb-[20px]">
          <div
            class="border-[2px] border-dotted border-gray-300 rounded-[6px]"
          ></div>
          <div
            class="border-[2px] border-dotted border-gray-300 rounded-[6px]"
          ></div>
          <div
            class="border-[2px] border-dotted border-gray-300 rounded-[6px]"
          ></div>
          <div
            class="border-[2px] border-dotted border-gray-300 rounded-[6px]"
          ></div>
        </div>
      </div>
    </div>

    <!-- Slug END -->
  </section>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const router = useRouter();

const store = reactive({
  id: "",
  name: "",
});

onMounted(() => {
  store.name = router.currentRoute.value.params.name
    .split("_")
    .join(" ")
    .toUpperCase();
  store.id = router.currentRoute.value.params.id;
  console.log(store.name);
});
</script>

<style lang="scss" scoped>
.btn {
  background-image: linear-gradient(
    to right,
    rgb(139, 255, 232) -250%,
    #046f80
  );
}
</style>
