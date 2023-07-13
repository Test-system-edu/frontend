<template>
  <div class="container mx-auto px-2">
    <!-- ----------------------------------------- EMPLYE TABLE ------------------------------------------------- -->

    <section class="md:py-4" :class="{ 'text-white': navbar.userNav }">
      <!------------------------------------------- Placeholder ------------------------------------------->
      <div v-show="!store.allProducts && !store.is_show.length">
        <Placeholder2 />
      </div>
      <!------------------------------------------- Placeholder ------------------------------------------->

      <!------------------------------------------- Search ------------------------------------------->

      <div
        v-show="store.allProducts && store.is_show.length"
        class="w-full max-w-screen"
      >
        <!-- Start coding here -->
        <div
          class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
          :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
        >
          <div
            class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5"
          >
            <h1 class="text-blue-700 font-bold text-lg">Testlar</h1>
          </div>

          <div class="w-full lg:w-80">
            <form class="flex items-center text-gray-900 font-medium">
              <label for="simple-search" class="sr-only">Qidiruv</label>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                  placeholder="Izlash uchun yozing .."
                />
              </div>
            </form>
          </div>
        </div>
        <!------------------------------------------- Search ------------------------------------------->

        <div
          class="relative shadow-md rounded-lg overflow-hidden"
          :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
        >
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
              <thead
                class="text-xs rounded-lg uppercase"
                :class="navbar.userNav ? 'bg-gray-700' : 'bg-gray-50'"
              >
                <tr>
                  <th scope="col" class="text-center py-3 px-8">Fan nomi</th>
                  <th scope="col" class="text-center py-3">Savollar soni</th>
                  <th scope="col" class="text-center py-3">Test vaqti</th>
                  <th scope="col" class="text-center py-3">Testni boshlash</th>
                </tr>
              </thead>
              <tbody v-show="!store.error">
                <tr
                  class="border-b"
                  :class="
                    navbar.userNav ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  "
                  v-for="i in store.allProducts"
                  :key="i"
                >
                  <th
                    scope="row"
                    class="px-8 py-3 text-center font-medium whitespace-nowrap"
                  >
                    {{ i.subject?.title }}
                  </th>
                  <td class="text-center font-medium px-8 py-2">
                    {{ i.test_count }}
                  </td>
                  <td class="text-center font-medium px-6 py-2">
                    {{ i.test_time }}
                  </td>
                  <td
                    v-if="i.questions"
                    class="text-center font-medium px-8 py-3"
                  >
                    <button
                      @click="enterSlug(i.id)"
                      v-if="
                        !store.is_show.includes(
                          `,${i.questions[0]?.test_group_id},`
                        )
                      "
                      class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                    >
                      Boshlash
                    </button>
                    <button
                      @click="enterSlug(i.id)"
                      v-if="
                        store.is_show.includes(
                          `,${i.questions[0]?.test_group_id},`
                        )
                      "
                      class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                    >
                      Ko'rish
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-show="store.allProducts && store.error"
              class="w-full max-w-screen text-center p-20 text-2xl font-medium"
            >
              <h1>{{ store.allProducts }}</h1>
            </div>
          </div>
          <nav
            class="flex flex-row justify-between items-center md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span class="text-sm font-normal">
              Sahifa
              <span class="font-semibold">1 - 10</span>
              dan
              <span class="font-semibold">10</span>
            </span>
            <ul class="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  class="flex font-bold text-black border-2 bg-white hover:bg-gray-300 items-center justify-center text-sm py-2 sm:mt-0 -mt-2 px-6 rounded-lg leading-tight"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>

    <!-- ----------------------------------------- EMPLYE TABLE END --------------------------------------------- -->
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
import { Placeholder2 } from "../../components";
import { useNotificationStore } from "../../stores/notification";
import axios from "@/services/axios";

const notification = useNotificationStore();
const navbar = useNavStore();
const router = useRouter();

const modal = ref(false);

const store = reactive({
  allProducts: false,
  error: false,
  test_group_id: "id",
  is_show: "",
  is_hide: "",
  subjects: [{ title: "Fan yaratilmagan" }],
});

function enterSlug(id) {
  router.push(`./start_test/start/${id}`);
}

// ----------------------------------- axios --------------------------------
const getProduct = () => {
  axios
    .get("/test-group", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
      store.allProducts = res.data;
      store.error = false;
    })
    .catch((error) => {
      store.allProducts = error.response.data.message;
      store.error = true;
      console.log("error", error);
    });
};

const getFinishTime = () => {
  let student_id = localStorage.getItem("userId");
  axios
    .get(`/test-time/student/${student_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      for (let i of res.data) {
        let date = new Date(i.end_time);
        let now = new Date();
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let d = now.getDate();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();
        if (day >= d) {
          if (hour >= h) {
            if (minute >= m) {
              if (second >= s) {
                store.test_group_id == "id";
              } else {
                store.test_group_id = i.test_group_id;
              }
            } else {
              store.test_group_id = i.test_group_id;
            }
          } else {
            store.test_group_id = i.test_group_id;
          }
        } else {
          store.test_group_id = i.test_group_id;
        }
      }
      axios
        .get(`/test-submit/student/${student_id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data, "dsds");
          for (let i of res.data) {
            if (i.is_submit) {
              store.is_show += `,${i.test_group_id},`;
            }
            if (store.test_group_id == "id" && i.is_submit) {
              store.is_hide = store.test_group_id;
            }
          }
        })
        .catch((error) => {
          console.log("error1", error);
        });
    })
    .catch((error) => {
      console.log("error", error);
      store.is_show = true;
    });
};

onMounted(() => {
  getProduct();
  getFinishTime();
});
</script>

<style lang="scss" scoped>
.btnAdd {
  background-image: linear-gradient(
    to right,
    rgb(139, 255, 203) -250%,
    #136f4f
  );
}

.btnKirish {
  background-image: linear-gradient(
    to right,
    rgb(139, 255, 232) -250%,
    #046f80
  );
}

.btnOrqaga {
  background-image: linear-gradient(
    to right,
    rgb(138, 183, 254) -250%,
    #2f73f0
  );
}
</style>
