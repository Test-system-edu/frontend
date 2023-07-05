<template>
  <section>
    <!-- Slug start  -->

    <div>
      <div class="mt-[30px] rounded-[6px] p-[15px]" :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
        <div class="flex justify-between items-center mb-10">
          <h1 class="flex items-center gap-3 text-[24px]">
            <span class="font-bold text-[18px]">O'quvchi ismi</span>|<span class="font-bold text-[18px]">Guruh nomi</span>
          </h1>
          <button @click="router.back(-1)" class="btn shadow-lg font-bold rounded-lg px-5 py-2.5 text-white focus:ring-2">
            Orqaga qaytish
          </button>
        </div>

        <div class="w-full bg-white border rounded-lg border-[#046f80]">
          <ul class="btn flex flex-wrap text-sm font-medium p-3 text-center text-[16px] rounded-t-lg" id="defaultTab"
            data-tabs-toggle="#defaultTabContent" role="tablist">
            <li class="mr-2">
              <button @click="toggleInfo" id="about-tab" data-tabs-target="#about" type="button" role="tab"
                aria-controls="about" aria-selected="true" class="inline-block px-3 py-1 hover:text-[#203843]"
                :class="info ? 'text-white font-semibold border-b border-white ' : 'text-white'">Natijalar</button>
            </li>
            <li class="mr-2">
              <button @click="toggleGroup" id="services-tab" data-tabs-target="#services" type="button" role="tab"
                aria-controls="services" aria-selected="false" class="inline-block px-3 py-1 hover:text-[#203843]"
                :class="group ? 'text-white font-semibold border-b border-white ' : 'text-white'">To'g'ri
                javoblar</button>
            </li>
          </ul>
          <div id="defaultTabContent" :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'">
            <div :class="info ? 'p-4 rounded-lg md:p-8' : 'hidden p-4 rounded-lg md:p-8'" id="about" role="tabpanel"
              aria-labelledby="about-tab">
              <h2 id="accordion-collapse-heading-1" class="mb-5">
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
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg"><strong>A:</strong>Lorem
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-1" class="mb-5">
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
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal2
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal2 ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg">
                    <strong>A:</strong>Lorem
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-1" class="mb-5">
                <button @click="toggleModal3" type="button"
                  class="flex items-center justify-between w-full text-left rounded-lg bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
                  data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                  aria-controls="accordion-collapse-body-1">
                  <div class="flex items-center gap-5">
                    <p
                      class='btn w-[40px] h-[30px] sm:h-[35px] 2xl:w-[55px] 2xl:h-[50px] flex items-center font-bold justify-center text-[16px] 2xl:text-[20px] text-white rounded-full'>
                      3
                    </p>
                    <h2 class="w-full text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia,
                      consequatur sit
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal3
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal3 ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg">
                    <strong>D:</strong>Lorem
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-1" class="mb-5">
                <button @click="toggleModal4" type="button"
                  class="flex items-center justify-between w-full text-left rounded-lg bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
                  data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                  aria-controls="accordion-collapse-body-1">
                  <div class="flex items-center gap-5">
                    <p
                      class='btn w-[40px] h-[30px] sm:h-[35px] 2xl:w-[55px] 2xl:h-[50px] flex items-center font-bold justify-center text-[16px] 2xl:text-[20px] text-white rounded-full'>
                      4
                    </p>
                    <h2 class="w-full text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia,
                      consequatur sit
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal4
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal4 ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-red-200 p-5 rounded-lg">
                    <strong>B:</strong>Lorem nimadur
                  </p>
                </div>
              </div>
            </div>
            <div :class="group ? 'p-4 rounded-lg md:p-8' : 'hidden p-4 rounded-lg md:p-8'" id="services" role="tabpanel"
              aria-labelledby="services-tab">
              <h2 id="accordion-collapse-heading-1" class="mb-5">
                <button @click="toggleModal" type="button"
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
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg">
                    <strong>A:</strong>Lorem
                  </p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-1" class="mb-5">
                <button @click="toggleModal2" type="button"
                  class="flex items-center justify-between w-full text-left rounded-lg bg-[rgba(213,219,242,0.5)] py-[24px] px-[32px]"
                  data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                  aria-controls="accordion-collapse-body-1">
                  <div class="flex items-center gap-5">
                    <p
                      class='btn w-[40px] h-[30px] sm:h-[35px] 2xl:w-[55px] 2xl:h-[50px] flex items-center font-bold justify-center text-[16px] 2xl:text-[20px] text-white rounded-full'>
                      3
                    </p>
                    <h2 class="w-full text-[14px] sm:text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officia,
                      consequatur sit
                      amet neque illum veniam placeat laboriosam doloribus hic ratione sed excepturi ipsa quidem non
                      delectus
                      aliquid nihil facere voluptas.</h2>
                  </div>
                  <i :class="modal2
                    ? 'bx bx-minus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    : 'bx bx-plus bg-white p-2 text-[#046f80] text-[30px] rounded-full'
                    "></i>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" :class="modal2 ? 'mb-5' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="flex flex-col gap-y-5 border p-5 border-t-0 border-[#046f80] rounded-b-lg"
                  :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'">
                  <p class="w-full text-justify text-black flex gap-3 bg-green-200 p-5 rounded-lg">
                    <strong>D:</strong>Lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>







    <!-- Slug END -->
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
const navbar = useNavStore();
const router = useRouter();

const info = ref(true)
const group = ref(false)

const toggleInfo = () => (info.value = !info.value, group.value = false);
const toggleGroup = () => (group.value = !group.value, info.value = false);

const modal = ref(false)
const modal2 = ref(false)
const modal3 = ref(false)
const modal4 = ref(false)

const toggleModal = () => (modal.value = !modal.value);
const toggleModal2 = () => (modal2.value = !modal2.value);
const toggleModal3 = () => (modal3.value = !modal3.value);
const toggleModal4 = () => (modal4.value = !modal4.value);

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
  background-image: linear-gradient(to right,
      rgb(139, 255, 232) -250%,
      #046f80);
}
</style>
