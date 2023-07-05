<template>
  <section>
    <div class="wrapper mt-8">
      <div
        :class="navbar.userNav ? 'bg-[#203843] text-white px-5 py-10 sm:px-10 flex flex-col gap-5 rounded-lg' : 'bg-white px-5 py-10 sm:px-10 flex flex-col gap-5 rounded-lg'"
        id="accordion-collapse" data-accordion="collapse">
        <div class="flex justify-between items-center font-bold mb-10">
          <h1>
            <span>{{ store.id }}</span>. <span>{{ store.name }}</span>
          </h1>
          <button @click="router.back(-1)" class="btn shadow-lg rounded-lg px-5 py-2.5 text-white focus:ring-2">
            Orqaga qaytish
          </button>
        </div>

        <h2 id="accordion-collapse-heading-1">
          <button @click="toggleModal" type="button"
            class="flex items-center justify-between w-full text-left rounded-lg bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
            aria-controls="accordion-collapse-body-1">
            <div class="flex items-center gap-5">
              <p
                class='btn w-[40px] h-[30px] sm:h-[35px] 2xl:w-[55px] 2xl:h-[50px] flex items-center font-bold justify-center text-[16px] 2xl:text-[20px] text-white rounded-full'>
                1
              </p>
              <h2 class="w-full text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia,
                consequatur sit
                amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non delectus
                aliquid nihil facere voluptas.</h2>
            </div>
            <i :class="modal
              ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
              : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
              "></i>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" :class="modal ? '' : 'hidden'" aria-labelledby="accordion-collapse-heading-1">
          <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
            :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>A:</strong>Lorem</p>
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>B:</strong>Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo iusto
              ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
            <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg"><strong>C:</strong>Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo
              iusto ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>D:</strong>Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo iusto
              ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-1">
          <button @click="toggleModal2" type="button"
            class="flex items-center justify-between w-full text-left rounded-lg bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
            aria-controls="accordion-collapse-body-1">
            <div class="flex items-center gap-5">
              <p
                class='btn w-[40px] h-[30px] sm:h-[35px] 2xl:w-[55px] 2xl:h-[50px] flex items-center font-bold justify-center text-[16px] 2xl:text-[20px] text-white rounded-full'>
                2
              </p>
              <h2 class="w-full text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia,
                consequatur sit
                amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non delectus
                aliquid nihil facere voluptas.</h2>
            </div>
            <i :class="modal2
              ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
              : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
              "></i>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" :class="modal2 ? '' : 'hidden'"
          aria-labelledby="accordion-collapse-heading-1">
          <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
            :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
            <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg"><strong>A:</strong>Lorem</p>
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>B:</strong>Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo iusto
              ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>C:</strong>Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo iusto
              ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
            <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>D:</strong>Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tempore dicta, omnis odit commodi maxime excepturi nemo iusto
              ab impedit molestiae dignissimos neque pariatur officiis rem vel asperiores saepe esse repellat.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const router = useRouter();

const modal = ref(false)
const modal2 = ref(false)

const toggleModal = () => (modal.value = !modal.value);
const toggleModal2 = () => (modal2.value = !modal2.value);

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

<style lang="scss" scoped>.btn {
  background-image: linear-gradient(to right,
      rgb(139, 255, 232) -250%,
      #046f80);
}</style>
