<template>
  <div class="container mx-auto px-2">
    <!-- ----------------------------------------- MODAL -------------------------------------------------------- -->

    <!-- Main modal -->
    <div
      :class="
        form.step == 1
          ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
          : 'hidden'
      "
    >
      <div class="relative p-4 w-full max-w-5xl h-auto">
        <!-- Modal content -->
        <div
          class="relative p-4 rounded-lg shadow sm:p-5"
          :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
          >
            <h3 class="text-lg">Yangi savolni qo'shish</h3>
            <button
              @click="toggleModal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form action="#">
            <div class="grid sm:flex sm:flex-col gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm text-amber-900 bg-amber-200 px-3 font-medium py-1 rounded-[5px] uppercase"
                  ><span>{{ form.step }}. </span>Savol</label
                >
                <textarea
                  v-model="form.question"
                  cols="30"
                  rows="10"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Savolni yozing.."
                  required
                ></textarea>
              </div>

              <div class="flex flex-col justify-between gap-8">
                <div class="w-full flex gap-5">
                  <div class="w-1/2">
                    <label
                      for="a"
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                      >Variant: A</label
                    >
                    <input
                      v-model="form.a"
                      type="text"
                      name="a"
                      id="a"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="A variantni kiriting"
                      required
                    />
                  </div>

                  <div class="w-1/2">
                    <label
                      for="b"
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                      >Variant: B</label
                    >
                    <input
                      v-model="form.b"
                      type="text"
                      name="b"
                      id="b"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="B variantni kiriting"
                      required
                    />
                  </div>
                </div>

                <div class="w-full flex gap-5">
                  <div class="w-1/2">
                    <label
                      for="c"
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                      >Variant: C</label
                    >
                    <input
                      v-model="form.c"
                      type="text"
                      name="c"
                      id="c"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="C variantni kiriting"
                      required
                    />
                  </div>

                  <div class="w-1/2">
                    <label
                      for="d"
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                      >Variant: D</label
                    >
                    <input
                      v-model="form.d"
                      type="text"
                      name="d"
                      id="d"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                      placeholder="D variantni kiriting"
                      required
                    />
                  </div>
                </div>

                <div class="w-1/2 mx-auto">
                  <label
                    for="category"
                    class="block mb-2 max-w-fit mx-auto px-5 text-sm font-medium text-center text-amber-900 bg-amber-200 py-1 rounded-[5px]"
                    >Tog'ri javobni belgilang</label
                  >
                  <div
                    class="flex justify-center items-center gap-5 font-bold pt-2"
                  >
                    <p
                      @click="form.true_answer = 'a'"
                      :class="{
                        'ring-4 ring-green-500 bg-amber-300':
                          form.true_answer == 'a',
                      }"
                      class="bg-gray-100 text-black w-7 h-7 text-center cursor-pointer hover:bg-amber-300 rounded-full"
                    >
                      A
                    </p>
                    <p
                      @click="form.true_answer = 'b'"
                      :class="{
                        'ring-4 ring-green-500 bg-amber-300':
                          form.true_answer == 'b',
                      }"
                      class="bg-gray-100 text-black w-7 h-7 text-center cursor-pointer hover:bg-amber-300 rounded-full"
                    >
                      B
                    </p>
                    <p
                      @click="form.true_answer = 'c'"
                      :class="{
                        'ring-4 ring-green-500 bg-amber-300':
                          form.true_answer == 'c',
                      }"
                      class="bg-gray-100 text-black w-7 h-7 text-center cursor-pointer hover:bg-amber-300 rounded-full"
                    >
                      C
                    </p>
                    <p
                      @click="form.true_answer = 'd'"
                      :class="{
                        'ring-4 ring-green-500 bg-amber-300':
                          form.true_answer == 'd',
                      }"
                      class="bg-gray-100 text-black w-7 h-7 text-center cursor-pointer hover:bg-amber-300 rounded-full"
                    >
                      D
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <button
                @click="form.step = 'step'"
                type="button"
                class="text-gray-500 border inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                class="btnAdd text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Keyingi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->

    <!-- Main modal -->
    <div
      :class="
        form.step == 0
          ? 'absolute overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden z-50 justify-center items-center w-full inset-0 h-full'
          : 'hidden'
      "
    >
      <div class="relative p-4 w-full max-w-xl h-auto">
        <!-- Modal content -->
        <div
          class="relative p-10 rounded-lg shadow"
          :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'"
        >
          <!-- Modal header -->
          <div
            class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
          >
            <h3 class="text-lg">Test qo'shish</h3>
            <button
              @click="form.step = 'step'"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
          <form @submit.prevent="addStep">
            <div class="grid mb-4 grid-cols-1">
              <div class="w-full flex justify-between gap-8">
                <div class="flex w-full flex-col gap-5">
                  <div class="">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-center text-amber-900 font-medium bg-amber-200 rounded-[5px] py-1"
                      >Fanni tanlang</label
                    >
                    <select
                      v-model="form.subject_id"
                      id="name"
                      class="bg-gray-50 text-black cursor-pointer border border-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                      required
                    >
                      <option
                        v-for="i in store.subjects"
                        :key="i.id"
                        :value="i.id"
                      >
                        {{ i.title }}
                      </option>
                    </select>
                  </div>
                  <div class="flex gap-5">
                    <div class="w-1/2">
                      <label
                        for="time"
                        class="block mb-2 text-sm text-amber-900 text-center font-medium bg-amber-200 py-1 rounded-[5px]"
                        >Savollarning umumiy soni</label
                      >
                      <input
                        type="number"
                        name="time"
                        max="600"
                        min="1"
                        v-model="form.test_time"
                        class="bg-gray-50 border float-left w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block p-2.5"
                        placeholder="60"
                        required
                      />
                    </div>
                    <div class="w-1/2">
                      <label
                        for="time"
                        class="block mb-2 text-sm text-amber-900 text-center font-medium bg-amber-200 py-1 rounded-[5px]"
                        >Savollarning umumiy vaqti</label
                      >
                      <input
                        v-model="form.test_count"
                        type="number"
                        name="time"
                        max="600"
                        min="1"
                        class="bg-gray-50 border float-left w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block p-2.5"
                        placeholder="60"
                        required
                      />
                      <span class="float-left pt-1 pl-5 text-xl">daqiqa</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <button
                type="button"
                @click="form.step = 'step'"
                class="text-gray-500 border inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                class="btnAdd text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Keyingi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->

    <!-- ----------------------------------------- EMPLYE TABLE ------------------------------------------------- -->

    <section class="md:py-4" :class="{ 'text-white': navbar.userNav }">
      <!------------------------------------------- Placeholder ------------------------------------------->
      <div v-show="!store.allProducts">
        <Placeholder2 />
      </div>
      <!------------------------------------------- Placeholder ------------------------------------------->

      <!------------------------------------------- Search ------------------------------------------->

      <div v-show="store.allProducts" class="w-full max-w-screen">
        <!-- Start coding here -->
        <div
          class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
          :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
        >
          <div
            class="w-full flex items-center lg:justify-start lg:pb-0 pb-4 justify-between gap-5"
          >
            <h1 class="text-blue-700 font-bold text-lg">Testlar</h1>
            <div
              class="lg:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3"
            >
              <button
                @click="form.step = 0"
                id=""
                type="button"
                class="btnAdd flex items-center max-w-fit justify-center whitespace-nowrap border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 sm:py-2"
              >
                <span class="sm:block hidden">Test qo'shish</span>
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
                  <th scope="col" class="py-3 pl-8">Fan nomi</th>
                  <th scope="col" class="text-center py-3">Test soni</th>
                  <th scope="col" class="text-center py-3">Test vaqti</th>
                  <th scope="col" class="text-center py-3">Savol qo'shish</th>
                  <th scope="col"></th>
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
                    class="px-8 py-3 font-medium whitespace-nowrap"
                  >
                    {{ i.subject?.title }}
                  </th>
                  <td class="text-center font-medium text-blue-800 px-8 py-2">
                    {{ i.test_count }}
                  </td>
                  <td class="text-center font-medium text-green-800 px-6 py-2">
                    {{ i.test_time }}
                  </td>
                  <td class="text-center font-medium px-8 py-3">
                    <button
                      @click="enterSlug(i, 'Qobilov Shoxsuvor')"
                      class="btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2"
                    >
                      Kirish
                    </button>
                  </td>
                  <td class="text-center whitespace-nowrap font-medium pr-5">
                    <i
                      @click="getOneProduct(i.id, 'edit')"
                      class="bx bxs-pencil bg-blue-300 text-blue-600 rounded-lg p-2 mr-3 cursor-pointer focus:ring-2"
                    >
                    </i>
                    <i
                      @click="deleteFunc(i.id)"
                      class="bx bxs-trash bg-red-300 cursor-pointer text-red-600 rounded-lg p-2 focus:ring-2"
                    >
                    </i>
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
  subjects: [{ title: "Fan yaratilmagan" }],
});

function enterSlug(id, name) {
  router.push(`./test/${id}/${name.toLowerCase()}`);
}

function cancelFunc() {
  form.name = "";
  form.description = "";
  modal.value = false;
}

function cancelFunc1() {
  edit.name = "";
  edit.description = "";
  edit.toggle = false;
}

function deleteFunc(id) {
  remove.id = id;
  remove.toggle = true;
}

function addStep(step) {
  const data = {
    test_count: form.test_count,
    test_time: form.test_time,
    subject_id: form.subject_id,
  };

  axios
    .post("/test-group", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      notification.success(res.data.message);
      alert(res.data.id);
      form.test_group_id = res.data.id;
      getProduct();
      cancelFunc();

      if (form.step == 0) {
        form.step += 1;
      }
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      console.log(error.response.data.message);
      console.log("error", error);
    });
}

// ----------------------------------- forms -----------------------------------
const form = reactive({
  test_count: "",
  test_time: "",
  subject_id: "",
  question: "",
  a: "",
  b: "",
  c: "",
  d: "",
  true_answer: "",
  test_group_id: "",
  question_id: "",
  step: "step",
});

const edit = reactive({
  name: "",
  description: "",
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
    .get("/test-group", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      store.allProducts = res.data;
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      store.allProducts = error.response.data.message;
      store.error = true;
      console.log("error", error);
    });
};

const getOneProduct = (id) => {
  axios
    .get(`/role/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      edit.name = res.data.name;
      edit.description = res.data.description;
      edit.id = id;
      edit.toggle = true;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const getSubject = () => {
  axios
    .get("/subject", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      store.subjects = res.data || [{ title: "Fan yaratilmagan" }];
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const editProduct = () => {
  const data = {
    name: edit.name,
    description: edit.description,
  };
  axios
    .patch(`/role/${edit.id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data.statusCode);
      notification.success("Lavozim tahrirlandi");
      getProduct();
      edit.name = "";
      edit.description = "";
      edit.toggle = false;
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        console.log(error.response.data.message);
        notification.warning(error.response.data.message);
      } else if (error.response.data.statusCode == 401) {
        console.log(error.response.data.message);
        notification.warning(error.response.data.message);
      }
      console.log("error", error);
    });
};

const deleteProduct = () => {
  axios
    .delete(`/role/${remove.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("AdminToken")}`,
      },
    })
    .then((res) => {
      console.log(res.data.statusCode);
      notification.success("Lavozim o'chirildi");
      getProduct();
      remove.toggle = false;
    })
    .catch((error) => {
      if (error.response.data.statusCode == 400) {
        console.log(error.response.data.message);
        notification.warning(error.response.data.message);
      } else if (error.response.data.statusCode == 401) {
        console.log(error.response.data.message);
        notification.warning(error.response.data.message);
      }
      console.log("error", error);
    });
};

onMounted(() => {
  getProduct();
  getSubject();
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
