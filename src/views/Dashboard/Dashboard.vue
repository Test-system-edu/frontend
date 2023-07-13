<template>
  <section :class="{ 'text-white': navbar.userNav }">
    <div v-show="store.data" class="rounded-lg pt-4">
      <!------------------------------------------------------------- Cards ------------------------------------------------------------->

      <div class="cards flex flex-wrap">
        <div
          class="card max-w-full px-2 mb-4 sm:w-full w-1/2 md:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
          v-for="(i, index) in 4"
          :key="i"
        >
          <div
            class="relative xl:mb-4 flex flex-col min-w-0 break-words shadow-soft-xl rounded-lg bg-clip-border"
            :class="{
              'bg-[#203843]': navbar.userNav,
              'bg-white': !navbar.userNav,
            }"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-row -mx-3">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                      v-show="index == 0"
                    >
                      O'quvchilar
                    </p>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                      v-show="index == 1"
                    >
                      Xodimlar
                    </p>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                      v-show="index == 2"
                    >
                      Fanlar
                    </p>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                      v-show="index == 3"
                    >
                      Guruhlar
                    </p>
                    <h5 class="mb-0 font-bold" v-show="index == 0">
                      {{ info.Students.length || 0 }}
                    </h5>
                    <h5 class="mb-0 font-bold" v-show="index == 1">
                      {{ info.Staff }}
                    </h5>
                    <h5 class="mb-0 font-bold" v-show="index == 2">
                      {{ info.Subjects }}
                    </h5>
                    <h5 class="mb-0 font-bold" v-show="index == 3">
                      {{ info.Groups }}
                    </h5>
                  </div>
                </div>
                <div class="basis-1/3">
                  <div
                    class="w-14 h-12 float-right pr-2 flex justify-center items-center rounded-lg bg-gray-1000"
                  >
                    <img
                      class="bg-gray-200 h-14 object-cover rounded-lg px-1 py-1"
                      src="https://cdn.pixabay.com/photo/2021/01/30/12/06/icon-5963629_960_720.png"
                      alt="img"
                      v-show="index == 0"
                    />
                    <img
                      class="bg-gray-200 h-14 object-cover rounded-lg"
                      src="https://cdn.pixabay.com/photo/2018/09/15/16/56/teacher-3679814_960_720.jpg"
                      alt="img"
                      v-show="index == 1"
                    />
                    <img
                      class="bg-gray-200 h-14 object-cover rounded-lg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuraLLKEykFDvI5Nc3Qo4RiqZqhzHLVU2vKQ&usqp=CAU"
                      alt="img"
                      v-show="index == 2"
                    />
                    <img
                      class="bg-gray-200 h-14 object-cover rounded-lg"
                      src="https://www.pngfind.com/pngs/m/170-1708222_png-file-svg-group-people-icon-png-transparent.png"
                      alt="img"
                      v-show="index == 3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!------------------------------------------------------------- Cards end ------------------------------------------------------------->

      <!------------------------------------------------------------- Charts ---------------------------------------------------------------->

      <div class="flex lg:flex-row flex-col gap-4 px-2 pb-4 items-center">
        <div
          class="lg:w-1/2 w-full py-4 rounded-lg overflow-hidden"
          :class="{
            'bg-[#203843]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <ChartLine class="w-[90%] sm:h-[24rem] h-[16rem] mx-auto" />
        </div>
        <div
          class="lg:w-1/2 w-full py-4 rounded-lg overflow-hidden"
          :class="{
            'bg-[#203843]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <UserChart class="w-[90%] sm:h-[24rem] h-[16rem] mx-auto" />
        </div>
      </div>

      <!------------------------------------------------------------- Charts ---------------------------------------------------------------->

      <!------------------------------------------------------------- Table 1 ---------------------------------------------------------------->

      <div class="flex lg:flex-row flex-col gap-4 px-2">
        <!-- Table start -->
        <div
          class="relative overflow-x-auto rounded-lg lg:w-1/2 w-full"
          :class="{
            'bg-[#203843]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="flex justify-between items-center px-4 py-3">
            <h1 class="text-lg font-medium">Star Students</h1>
            <i
              class="bx bx-dots-vertical-rounded py-1 cursor-pointer rounded"
            ></i>
          </div>
          <table class="w-full text-sm text-left">
            <thead
              class="text-xs text-black uppercase"
              :class="{
                'bg-gray-700 text-white': navbar.userNav,
                'bg-gray-50 text-gray-900': !navbar.userNav,
              }"
            >
              <tr>
                <th scope="col" class="px-4 py-3">
                  <div class="flex items-center">ID</div>
                </th>
                <th scope="col" class="px-6 py-3">Name</th>
                <th scope="col" class="px-6 py-3">Marks</th>
                <th scope="col" class="px-6 py-3">Precentage</th>
                <th scope="col" class="px-6 py-3">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="i in 5"
                :key="i"
                class="hover:bg-gray-50"
                :class="{
                  'bg-[#203843] text-white hover:bg-gray-700': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <td class="w-4 p-4">
                  <div class="flex items-center">1000</div>
                </td>
                <th
                  scope="row"
                  class="flex leading-6 items-center py-3 px-6 whitespace-nowrap"
                >
                  <img
                    class="w-10 h-10 rounded-full object-center object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMnibg5Lm3vtp0ILawiFJmrVXHf8I6g1VYQ&usqp=CAU"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <p class="font-semibold text-sm">Neil Sims</p>
                    <p
                      class="font-normal text-gray-500"
                      :class="{ 'text-gray-200': navbar.userNav }"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </th>
                <td class="px-6 py-3">1185</td>
                <td class="px-6 py-3">
                  <p class="flex items-center">98%</p>
                </td>
                <td class="px-6 py-3">
                  <p class="font-medium text-blue-600 hover:underline">1998</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!------------------------------------------------------------- Table 1 end ---------------------------------------------------------------->

        <!------------------------------------------------------------- Student activity  ---------------------------------------------------------------->

        <div
          class="relative overflow-x-auto rounded-lg lg:w-1/2 w-full"
          :class="{
            'bg-[#203843]': navbar.userNav,
            'bg-white': !navbar.userNav,
          }"
        >
          <div class="flex justify-between items-center px-4 py-3">
            <h1 class="text-lg font-medium">Student Activity</h1>
            <i
              class="bx bx-dots-vertical-rounded py-1 cursor-pointer rounded"
            ></i>
          </div>
          <table class="w-full text-sm text-left text-gray-500">
            <tbody>
              <tr
                v-for="i in 6"
                :key="i"
                class="flex justify-between pb-2 pl-5 pr-1 hover:bg-gray-50"
                :class="{
                  'bg-[#203843] hover:bg-gray-700 text-white': navbar.userNav,
                  'bg-white': !navbar.userNav,
                }"
              >
                <th
                  scope="row"
                  class="flex leading-7 items-center whitespace-nowrap"
                >
                  <img
                    class="w-10 h-9 bg-gray-100 rounded-md p-2 object-center object-cover"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/trophy-cup-5254444-4391008.png"
                    alt="Jese image"
                  />
                  <div class="pl-3">
                    <p>1st place in "Chess”</p>
                    <p class="font-medium text-gray-500 text-xs">
                      John Doe won 1st place in "Chess"
                    </p>
                  </div>
                </th>
                <td class="p-4 mn-w-fit">
                  <div
                    class="flex items-center whitespace-nowrap truncate min-w-fit text-gray-900 bg-red-200 rounded px-2 py-1 text-xs"
                  >
                    1 day ago
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!------------------------------------------------------------- Student activity end ---------------------------------------------------------------->

      <!------------------------------------------------------------- Cards ---------------------------------------------------------------->

      <!-- <div class="cards flex flex-wrap mt-4">
        <div
          class="card max-w-full px-2 mb-4 sm:w-full w-1/2 md:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4"
          v-for="(i, index) in 4"
          :key="i"
        >
          <div
            class="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-lg bg-clip-border"
            :class="{
              'bg-[#1877F2]': index == 0,
              'bg-[#1D9BF0]': index == 1,
              'bg-[#FE643B]': index == 2,
              'bg-[#0A66C2]': index == 3,
            }"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-row items-center -mx-3">
                <div class="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p
                      class="mb-0 font-sans font-semibold leading-normal text-sm"
                    >
                      Like us on facebook
                    </p>
                    <h5 class="mb-0 font-bold">50,095</h5>
                  </div>
                </div>
                <div class="basis-1/3 float-right">
                  <div
                    class="w-14 h-12 float-right pr-3 flex justify-center text-lg items-center rounded-lg bg-gray-1000"
                  >
                    <div class="bg-white rounded">
                      <i
                        class="bx bxl-facebook m-3 p-1 rounded shadow-md shadow-blue-500 bg-[#1877F2]"
                        v-show="index == 0"
                      ></i>
                    </div>
                    <div class="bg-white rounded">
                      <i
                        class="bx bxl-twitter m-3 p-1 rounded shadow-md shadow-blue-500 bg-[#1D9BF0]"
                        v-show="index == 1"
                      ></i>
                    </div>
                    <div class="bg-white rounded">
                      <i
                        class="bx bxl-instagram m-3 p-1 rounded shadow-md shadow-red-600 bg-red-600"
                        v-show="index == 2"
                      ></i>
                    </div>
                    <div class="bg-white rounded">
                      <i
                        class="bx bxl-linkedin m-3 p-1 rounded shadow-md shadow-blue-700 bg-[#0A66C2]"
                        v-show="index == 3"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!------------------------------------------------------------- Cards end ---------------------------------------------------------------->

    <!------------------------------------------------------------- Placeholder ---------------------------------------------------------------->

    <div v-show="!store.data">
      <Placeholder1 />
    </div>

    <!------------------------------------------------------------- Placeholder end ---------------------------------------------------------------->
  </section>
</template>

<script setup>
import { onBeforeMount, reactive } from "vue";
import { ChartLine, UserChart, Placeholder1 } from "../../components";
import { useNavStore } from "../../stores/toggle";
import { useInfoStore } from "../../stores/dashboard";
import axios from "../../services/axios";
import { useRouter } from "vue-router";
const router = useRouter();
const navbar = useNavStore();
const info = useInfoStore();

const store = reactive({
  data: false,
  cards: ["Xodimlar", "O'quvchilar", "Fanlar", "Guruhlar"],
});

setTimeout(() => {
  store.data = true;
}, 1000);

const getGuard = () => {
  axios
    .get("/staff", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {})
    .catch((error) => {
      if (error.response.data.message == "Admin huquqi sizda yo'q!") {
        router.push("/start_test");
      }
    });
};

onBeforeMount(() => {
  getGuard();
});
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .cards {
    display: block;
    width: 200%;
  }

  .card .card {
    width: 200%;
  }
}
</style>
