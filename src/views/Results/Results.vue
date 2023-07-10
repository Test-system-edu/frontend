<template>
  <div class="container mx-auto py-4 px-2">
    <!------------------------------------------- Placeholder ------------------------------------------->
    <div v-show="!store.allProducts">
      <Placeholder2 />
    </div>
    <!------------------------------------------- Placeholder ------------------------------------------->

    <!------------------------------------------- Search ------------------------------------------->
    <div
      v-show="store.allProducts"
      class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
      :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
    >
      <div
        class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5"
      >
        <h1 class="text-blue-700 font-bold text-lg">Test natijalari</h1>
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
              placeholder="Izlash uchun yozing..."
            />
          </div>
        </form>
      </div>
    </div>
    <!------------------------------------------- Search ------------------------------------------->

    <div
      class="relative shadow-md rounded-lg overflow-hidden"
      :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'"
    >
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead
            class="text-xs rounded-lg uppercase"
            :class="navbar.userNav ? 'bg-gray-700' : 'bg-gray-50'"
          >
            <tr>
              <th class="py-3 px-8 text-left">I . F . O</th>
              <th class="py-3 px-6 text-left">✅</th>
              <th class="py-3 px-6 text-left">❌</th>
              <th class="py-3 px-6 text-left">Daraja</th>
              <th class="py-3 px-6 text-left">Score</th>
              <th class="py-3 px-6 text-center">Sarflangan vaqt</th>
              <th scope="col" class="text-center py-3">To'liq</th>
            </tr>
          </thead>
          <tbody v-show="!store.error">
            <tr
              class="border-b cursor-pointer"
              :class="navbar.userNav ? 'hover:bg-gray-700' : 'hover:bg-gray-50'"
              v-for="i in store.allProducts"
              :key="i.id"
            >
              <td class="py-3 pr-6 pl-8 flex items-center gap-3">
                <img
                  v-if="i.imageUrl"
                  :src="i.imageUrl"
                  alt="img"
                  class="h-12 w-12 object-cover object-center rounded-full"
                />
                <img
                  v-if="!i.imageUrl"
                  src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360"
                  alt="img"
                  class="h-12 w-12 object-cover object-center rounded-full"
                />
                <p class="whitespace-nowrap mr-3">{{ i.student?.full_name }}</p>
              </td>
              <td class="py-3 px-6 font-bold text-[green]">
                {{ 12 }}
              </td>
              <td class="py-3 px-6 font-bold text-[red]">
                {{ 28 }}
              </td>
              <td class="py-3 px-6 font-bold">12.23.23</td>
              <td class="py-3 px-6 font-bold">13.23.23</td>
              <td class="py-3 px-6 whitespace-nowrap text-center">
                {{ i.test_group?.test_time }} / 27
              </td>
              <td class="text-center font-medium px-8 py-3">
                <button
                  @click="enterSlug(i.id, i.student.full_name)"
                  class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                >
                  Kirish
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-show="store.error" class="flex w-full justify-center">
          <h1 class="p-20 text-2xl font-medium">{{ store.allProducts }}</h1>
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

const toggleModal = () => {
  modal.value = !modal.value;
  form.name = "";
  form.start_date = "";
};

const store = reactive({
  allProducts: false,
  error: false,
});

function cancelFunc() {
  form.name = "";
  form.start_date = "";
  modal.value = false;
}

function cancelFunc1() {
  edit.name = "";
  edit.start_date = "";
  edit.toggle = false;
}

function deleteFunc(id) {
  remove.id = id;
  remove.toggle = true;
}

// ----------------------------------- forms -----------------------------------
const form = reactive({
  name: "",
  start_date: "",
});

const edit = reactive({
  name: "",
  start_date: "",
  id: "",
  toggle: false,
});

const remove = reactive({
  id: "",
  toggle: false,
});

// ----------------------------------- axios --------------------------------
const getProduct = () => {
  axios
    .get("/test-result", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      store.allProducts = res.data;
      store.error = false;
    })
    .catch((error) => {
      store.allProducts = error.response.data.message;
      store.error = true;
    });
};

const getOneProduct = (id) => {
  axios
    .get(`/test-result/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      edit.name = res.data.name;
      edit.start_date = res.data.start_date.slice(0, 10);
      edit.id = id;
      edit.toggle = true;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const createProduct = () => {
  const data = {
    name: form.name,
    start_date: form.start_date,
  };
  axios
    .post("/test-result", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      notification.success(res.data.message);
      getProduct();
      cancelFunc();
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      console.log(error);
    });
};

const editProduct = () => {
  const data = {
    name: edit.name,
    start_date: edit.start_date,
  };
  axios
    .patch(`/test-result/${edit.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      notification.success(res.data.message);
      getProduct();
      edit.name = "";
      edit.start_date = "";
      edit.toggle = false;
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        notification.warning(error.response.data.message);
      } else if (error.response.data.statusCode == 401) {
        notification.warning(error.response.data.message);
      }
      console.log("error", error);
    });
};

const deleteProduct = () => {
  axios
    .delete(`/test-result/${remove.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      notification.success("Guruh o'chirildi");
      getProduct();
      remove.toggle = false;
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        notification.warning(error.response.data.message);
      } else if (error.response.data.statusCode == 401) {
        notification.warning(error.response.data.message);
      }
      console.log(error);
    });
};

onMounted(() => {
  getProduct();
});

function enterSlug(id, name) {
  name = name.toLowerCase().split(" ").join("_");
  router.push(`./results/${id}/${name}`);
}
</script>

<style lang="scss" scoped>
.btnKirish {
  background-image: linear-gradient(
    to right,
    rgb(139, 255, 232) -250%,
    #046f80
  );
}
</style>
