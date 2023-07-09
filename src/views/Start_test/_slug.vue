<template>
  <section class="container mx-auto px-2">
    <div
      class="flex justify-center items-center bg-[#203843] rounded-lg mx-3 my-2"
    >
      <Timer class="h-20" />
    </div>

    <div
      v-show="store.step == -1"
      class="flex justify-center items-center min-h-[78vh] mx-3 rounded-lg"
      :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'"
    >
      <button
        @click="
          store.step = 0;
          setData(store.step);
          timer.time = store.test_time;
        "
        type="button"
        class="btnAdd flex items-center max-w-fit justify-center whitespace-nowrap border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-10 py-3"
      >
        Testni boshlash
      </button>
    </div>
    <div
      :class="
        store.step >= 0
          ? 'overflow-y-auto flex overflow-x-hidden justify-center items-center w-full h-full'
          : 'hidden'
      "
    >
      <div class="show relative p-4 w-full h-auto duration-100">
        <!-- Modal content -->
        <div
          class="relative p-4 rounded-lg shadow sm:p-5"
          :class="navbar.userNav ? 'bg-[#203843] text-white' : 'bg-white'"
        >
          <div>
            <div class="grid sm:flex sm:flex-col gap-4 mb-4 sm:grid-cols-2">
              <div>
                <h1
                  for="phone"
                  class="block mb-2 text-sm text-amber-900 bg-amber-200 px-3 font-medium py-1 rounded-[5px] uppercase"
                >
                  <span>{{ store.step + 1 }}. </span>Savol
                </h1>
                <textarea
                  v-model="store.question"
                  cols="30"
                  rows="5"
                  class="bg-gray-50 font-medium border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="Savol topilmadi"
                  disabled
                ></textarea>
              </div>

              <div
                class="flex flex-col font-bold justify-between gap-8"
                :class="{ 'pointer-events-none': store.trueCheck }"
              >
                <div class="w-full flex gap-5">
                  <div class="w-1/2">
                    <h1
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                    >
                      Variant: A
                    </h1>
                    <p
                      @click="
                        store.true_answer = 'a';
                        playSound();
                      "
                      :class="{
                        'ring-4 ring-[#04fc43] hover:bg-gray-500':
                          store.true_answer == 'a' || store.trueCheck == 'a',
                      }"
                      class="bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.a }}
                    </p>
                  </div>

                  <div class="w-1/2">
                    <h1
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                    >
                      Variant: B
                    </h1>
                    <p
                      @click="
                        store.true_answer = 'b';
                        playSound();
                      "
                      :class="{
                        'ring-4 ring-[#04fc43] hover:bg-gray-500':
                          store.true_answer == 'b' || store.trueCheck == 'b',
                      }"
                      class="bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.b }}
                    </p>
                  </div>
                </div>

                <div class="w-full flex gap-5">
                  <div class="w-1/2">
                    <h1
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                    >
                      Variant: C
                    </h1>
                    <p
                      @click="
                        store.true_answer = 'c';
                        playSound();
                      "
                      :class="{
                        'ring-4 ring-[#04fc43] hover:bg-gray-500':
                          store.true_answer == 'c' || store.trueCheck == 'c',
                      }"
                      class="bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.c }}
                    </p>
                  </div>

                  <div class="w-1/2">
                    <h1
                      class="block mb-2 text-sm text-amber-900 bg-amber-200 text-center font-medium py-0.5 rounded-[5px] uppercase"
                    >
                      Variant: D
                    </h1>
                    <p
                      @click="
                        store.true_answer = 'd';
                        playSound();
                      "
                      :class="{
                        'ring-4 ring-[#04fc43] hover:bg-gray-500':
                          store.true_answer == 'd' || store.trueCheck == 'd',
                      }"
                      class="bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.d }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full flex items-center justify-between border-t pt-5 mt-5"
            >
              <div class="w-[15%]">
                <button
                  type="button"
                  class="text-gray-500 border inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  To'xtatish
                </button>
              </div>
              <div
                class="flex flex-wrap w-[70%] justify-center items-center gap-1 text-black"
              >
                <button
                  class="step bg-gray-200 text-center font-medium w-7 h-7 rounded-full"
                  :class="{
                    'bg-gray-500 text-white ring-2 ring-green-600 border':
                      store.step == index,
                    'bg-green-600': store.trueId.includes(`,${i.id},`),
                  }"
                  v-for="(i, index) in store.data.questions"
                  :key="i.id"
                  @click="
                    store.step = index;
                    showModal();
                    setData(store.step);
                    showAnswer(i.id);
                  "
                >
                  {{ index + 1 }}
                </button>
              </div>
              <div class="w-[15%] text-end">
                <button
                  @click="createAnswer()"
                  type="submit"
                  :class="{ 'pointer-events-none hidden': store.trueCheck }"
                  class="btnAdd text-white inline-flex items-center bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Yuborish
                </button>
                <button
                  type="submit"
                  :class="{ hidden: !store.trueCheck }"
                  class="btnAdd pointer-events-none text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Yuborilgan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted,onBeforeMount, reactive, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
import { Placeholder2 } from "../../components";
import { useNotificationStore } from "../../stores/notification";
import { useTimeStore } from "../../stores/timer";
import axios from "@/services/axios";
import { Timer } from "../../components";
import clickSound from "@/assets/clickSound.wav";

const notification = useNotificationStore();
const timer = useTimeStore();
const navbar = useNavStore();
const router = useRouter();

const store = reactive({
  question: "",
  a: "Topilmadi",
  b: "Topilmadi",
  c: "Topilmadi",
  d: "Topilmadi",
  true_answer: "",
  question_id: "",
  subject: "",
  data: "",
  test_time: 0,
  step: -1,
  trueId: "",
  trueAnswer: "",
  allResults: [],
  trueCheck: "",
});

function playSound() {
  let audio = new Audio(clickSound);
  audio.play();
}

function showAnswer(id) {
  let t = 0;
  for (let i of store.allResults) {
    if (i.question_id == id) {
      t += 1;
      store.trueCheck = i.answer;
    }
  }
  if (t == 0) {
    store.trueCheck = "";
  }
}

function showModal() {
  document.querySelector(".show").className += " opacity-0";
  setTimeout(() => {
    document.querySelector(".show").classList.remove("opacity-0");
  }, 100);
}

function setData(step) {
  store.true_answer = "";
  console.log(
    store.data?.questions[step].id,
    "----------------------------------------------------------------"
  );
  store.question_id = store.data?.questions[step]?.id;
  store.question = store.data?.questions[step]?.question;
  store.a = store.data?.questions[step]?.answers[0]?.a;
  store.b = store.data?.questions[step]?.answers[0]?.b;
  store.c = store.data?.questions[step]?.answers[0]?.c;
  store.d = store.data?.questions[step]?.answers[0]?.d;
}

// ----------------------------------------------------------------

const getOneProduct = () => {
  const id = router.currentRoute?.value?.params?.id;
  axios
    .get(`/test-group/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      store.test_time = res.data.test_time;
      store.data = res.data;
      store.question_id = res.data.questions[0].id;
      store.subject = res.data?.subject.title;
    })
    .catch((error) => {
      // notification.warning(error.response?.data?.message);
      console.log("error", error);
    });
};

const getAllResults = () => {
  const id = router.currentRoute?.value?.params?.id;
  axios
    .get(`/test-result/studentId/${localStorage.getItem("userId")}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data, "gitall");
      let resultNumber = [];
      let resultAnswer = [];
      for (let i of res.data) {
        resultNumber.push(i.question_id);
        resultAnswer.push(i.answer);
      }
      store.trueId = "," + resultNumber.join(",") + ",";
      store.trueAnswer = "," + resultAnswer.join(",") + ",";
      for (let i of res.data) {
        if (i.test_group?.subject?.title == store.subject) {
          store.allResults.push(i);
        }
      }
      for (let i of store.allResults) {
        if (i.question_id == store.question_id) {
          store.trueCheck = i.answer;
        }
      }
      // if (store.question_id == store.allResults[0].question_id) {
      // }
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      console.log("error", error);
    });
};

const createAnswer = () => {
  const data = {
    answer: store.true_answer,
    test_group_id: +router.currentRoute?.value?.params?.id,
    question_id: store.question_id,
    student_id: localStorage.getItem("userId"),
  };
  axios
    .post(`/test-result`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      notification.success(res.data.message);
      console.log(res.data);
      getAllResults();
      getOneProduct();
      store.data = res.data;
    })
    .catch((error) => {
      for (let i of error.response.data.message) {
        if (
          i == "Talaba ID si matn shaklida bo'lishi zarur!" ||
          i == "Iltimos, talaba ID sini kiriting!"
        ) {
          router.push("/login");
        }
      }
      notification.warning(error.response.data.message);
      console.log("error", error);
    });
};

onBeforeMount(() => {
  getOneProduct();
  getAllResults();

  window.addEventListener("onunmount", () => {
    prompt("Hello");
  });
});
</script>

<style lang="scss" scoped></style>
