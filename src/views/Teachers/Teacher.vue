<template>
  <div class="container mx-auto px-2">
    <!-- ----------------------------------------- MODAL -------------------------------------------------------- -->

    <!-- Main modal -->
    <div
      :class="
        modal
          ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
          : 'hidden'
      "
    >
      <div class="relative p-4 max-w-5xl min-w-[50%] h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 rounded-lg shadow sm:p-5"
          :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
          >
            <h3
              class="text-lg"
              :class="navbar.userNav ? 'text-white' : 'text-black'"
            >
              Yangi o'qituvchi qo'shish
            </h3>
            <button
              @click="toggleModal"
              type="button"
              class="bg-transparent hover:bg-gray-200 hover rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              :class="navbar.userNav ? 'text-white' : 'text-black'"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <form
            @submit.prevent="createProduct"
            :class="{ darkForm: navbar.userNav }"
          >
            <div class="grid font-medium gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="name" class="block mb-2 text-sm"
                  >To'liq ismi (I . F . O)</label
                >
                <input
                  v-model="form.full_name"
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="To'liq ismini kiriting"
                  required
                />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm"
                  >Telefon raqami</label
                >
                <input
                  v-model="form.phone_number"
                  type="text"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="Telefon raqamini kiriting"
                  required
                />
              </div>
              <div class="w-[205%]">
                <label for="email" class="block mb-2 text-sm">Email</label>
                <input
                  v-model="form.email"
                  type="text"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="email"
                  required
                />
              </div>
              <div></div>
              <div>
                <label for="login" class="block mb-2 text-sm">Login</label>
                <input
                  v-model="form.login"
                  type="text"
                  name="login"
                  id="login"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="login"
                  required
                />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm">Parol</label>
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="*********"
                  required
                />
              </div>
              <div>
                <label for="category" class="block mb-2 text-sm font-medium"
                  >Lavozimi</label
                >
                <select
                  v-model="form.role"
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-md z-10 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                >
                  <option value="Rektor">Rektor</option>
                  <option value="Prorektor">Prorektor</option>
                  <option value="Professor">Professor</option>
                </select>
              </div>
              <div>
                <label for="telegra," class="block mb-2 text-sm"
                  >Telegram username</label
                >
                <input
                  v-model="form.telegram_username"
                  type="text"
                  name="telegram"
                  id="telegram"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  placeholder="@example2023"
                  required
                />
              </div>
              <div class="relative" @mouseleave="toggle.subject = false">
                <div for="category" class="block mb-2 text-sm">
                  Fanlari (ixtiyoriy)
                </div>
                <h1
                  @click="toggle.subject = !toggle.subject"
                  class="flex justify-between relative bg-gray-50 border border-gray-300 cursor-pointer text-sm rounded-lg focus:ring-green-500 focus:border-green-500 w-full p-2.5"
                >
                  <span>Fanlarni tanlang</span>
                  <i
                    class="bx bx-chevron-down text-2xl absolute top-1 text-gray-500 right-2"
                  ></i>
                </h1>
                <div
                  v-show="toggle.subject"
                  class="absolute z-10 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1"
                >
                  <p
                    class="flex items-center py-0.5 mb-1 px-1.5 rounded cursor-pointer"
                    :class="{
                      'bg-gray-300': toggle.subjects.join(',').includes(i),
                    }"
                    v-for="i in subjects"
                    :key="i"
                    @click="addSubject"
                  >
                    {{ i }}
                  </p>
                </div>
              </div>
              <div class="bg-white rounded-lg px-2">
                {{ toggle.subjects.join(", ") }}
              </div>

              <div class="relative" @mouseleave="toggle.group = false">
                <div for="category" class="block mb-2 text-sm">
                  Guruhlari (ixtiyoriy)
                </div>
                <h1
                  @click="toggle.group = !toggle.group"
                  class="flex justify-between relative bg-gray-50 border border-gray-300 cursor-pointer text-sm rounded-lg focus:ring-green-500 focus:border-green-500 w-full p-2.5"
                >
                  <span>Guruhlarni tanlang</span>
                  <i
                    class="bx bx-chevron-down text-2xl absolute top-1 text-gray-500 right-2"
                  ></i>
                </h1>
                <div
                  v-show="toggle.group"
                  class="absolute z-10 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-1"
                >
                  <p
                    class="flex items-center py-0.5 mb-1 px-1.5 rounded cursor-pointer"
                    v-for="i in groups"
                    :key="i"
                    :id="`back${i}`"
                    @click="addGroup"
                  >
                    {{ i }}
                  </p>
                </div>
              </div>
              <div class="bg-white rounded-lg px-2">
                {{ toggle.groups.join(", ") }}
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <button
                @click="cancelFunc"
                type="button"
                class="border cursor-pointer inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                class="btnAdd cursor-pointer text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Qo'shish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->

    <!-- ----------------------------------------- EMPLYE TABLE ------------------------------------------------- -->

    <section class="pt-4" :class="{ 'text-white': navbar.userNav }">
      <!------------------------------------------- Placeholder ------------------------------------------->
      <div v-show="!store.data">
        <Placeholder2 />
      </div>
      <!------------------------------------------- Placeholder ------------------------------------------->

      <!------------------------------------------- Search ------------------------------------------->

      <div v-show="store.data" class="w-full max-w-screen">
        <!-- Start coding here -->
        <div
          class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
          :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
        >
          <div
            class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5"
          >
            <h1 class="text-blue-700 font-bold text-lg">Xodimlar</h1>
            <div
              class="lg:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3"
            >
              <button
                @click="toggleModal"
                id=""
                type="button"
                class="btnAdd flex items-center max-w-fit justify-center whitespace-nowrap border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 sm:py-2"
              >
                <span class="sm:block hidden">Xodim qo'shish</span>
                <i class="sm:hidden block bx bxs-user-plus text-lg"></i>
              </button>
            </div>
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
                  <th scope="col" class="text-center py-3">I . F . O</th>
                  <th scope="col" class="text-center py-3">Fan O'qituvchisi</th>
                  <th scope="col" class="text-center py-3">Telefon raqami</th>
                  <th scope="col" class="text-center py-3">Lavozim</th>
                  <th scope="col" class="text-center py-3">To'liq</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b"
                  :class="
                    navbar.userNav ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  "
                  v-for="i in store.allProducts"
                  :key="i.id"
                >
                  <th
                    scope="row"
                    class="text-center px-8 py-3 font-medium whitespace-nowrap"
                  >
                    {{ i.full_name }}
                  </th>
                  <td class="text-center font-medium text-blue-800 px-8 py-2">
                    <p
                      class="bg-blue-100 min-w-fit rounded-[5px] p-1 whitespace-nowrap"
                    >
                      {{ i.subjects }}
                    </p>
                  </td>
                  <td class="text-center font-medium text-red-800 px-8 py-2">
                    <p class="bg-red-100 rounded-[5px] p-1">{{ i.phone_number }}</p>
                  </td>
                  <td class="text-center font-medium text-green-800 px-8 py-2">
                    <p class="bg-green-100 rounded-[5px] p-1">{{ i.roles }}</p>
                  </td>
                  <td class="text-center font-medium px-8 py-3">
                    <button
                      @click="enterSlug(i.id, i.full_name)"
                      class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                    >
                      Kirish
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
const toggleModal = () => (modal.value = !modal.value);

const store = reactive({
  allProducts: false,
});

setTimeout(() => {
  store.data = true;
}, 1000);

function enterSlug(id, name) {
  name = name.toLowerCase().split(" ").join("_");
  router.push(`./employees/${id}/${name}`);
}

function addSubject(e) {
  for (let i in toggle.subjects) {
    if (toggle.subjects[i] == e.target.innerHTML) {
      toggle.subjects.splice(i, 1);
      return;
    }
  }
  toggle.subjects.push(e.target.innerHTML);
}

function addGroup(e) {
  let back = document.querySelector(`#${e.target.id}`);
  back.classList.remove("bg-gray-300");
  for (let i in toggle.groups) {
    if (toggle.groups[i] == e.target.innerHTML) {
      toggle.groups.splice(i, 1);
      return;
    }
  }
  toggle.groups.push(e.target.innerHTML);
  for (let i of toggle.groups) {
    let back = document.querySelector(`#back${i}`);
    back.className += " bg-gray-300";
  }
}

function cancelFunc() {
  form.full_name = "";
  form.phone_number = "";
  form.email = "";
  form.login = "";
  form.password = "";
  form.telegram_username = "";
  form.role = "Rektor";
  form.subject = "";
  form.group = "";
  toggle.groups = [];
  toggle.subjects = [];
  modal.value = false;
}

// toggle
const toggle = reactive({
  subject: false,
  group: false,
  subjects: [],
  groups: [],
});

// ----------------------------------- forms -----------------------------------
const form = reactive({
  full_name: "",
  phone_number: "",
  email: "",
  login: "",
  password: "",
  telegram_username: "",
  role: "Rektor",
  subject: "",
  group: "",
});

const subjects = ["ona tili", "matematika", "ingliz tili"];
const groups = ["I", "II", "III", "IV", "VI"];

// ----------------------------------- axios --------------------------------

const createProduct = () => {
  const data = {
    full_name: form.full_name,
    phone_number: form.phone_number,
    email: form.email,
    login: form.login,
    password: form.password,
    telegram_username: form.telegram_username,
    role: form.role || "Rektor",
    subject: toggle.subjects.join(", ") || "null",
    group: toggle.groups.join(", ") || "null",
  };
  axios
    .post("/staff/create", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data.statusCode);
      if (res.data.statusCode == 400) {
        console.log(res.data.message);
      }
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        console.log(error.response.data.message);
        notification.warning(error.response.data.message);
      }
      console.log("error", error);
    });
};

const getProduct = () => {
  axios
    .get("/staff")
    .then((res) => {
      console.log(res.data);
      store.allProducts = res.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

onMounted(() => {
  getProduct();
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
