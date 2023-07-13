<template>
  <section class="container mx-auto px-2">
    <!------------------------ Stop modal -------------------------------->
    <div
      v-show="store.toggle"
      tabindex="-1"
      aria-hidden="true"
      class="flex justify-center items-center min-h-screen absolute bg-[#8080804b] right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Testni tugatish
            </h3>
            <button @click="store.toggle = false"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <i class="bx bx-x text-3xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="text-center font-medium p-6 space-y-6">
            <p
              class="text-base bg-red-500 py-2 text-white rounded-lg leading-relaxed"
            >
              Agar siz testni tugatsangiz siz javoblarni boshqa yubora olmaysiz.
            </p>
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              Agar testni tugatishni va natijalarni ko'rishni xohlasangiz
              <span class="text-red-500">tugatish</span> tugmasini bosing
            </p>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="store.toggle = false"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Bekor qilish
            </button>
            <button
              @click="
                store.time = false;
                store.toggle = false;
                sendResult(true);
              "
              type="button"
              class="text-gray-500 hover:bg-red-500 hover:text-white bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10"
            >
              Tugatish
            </button>
          </div>
        </div>
      </div>
    </div>

    <!------------------------ Stop modal -------------------------------->

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
          createTime();
          getAllResults();
          getOneProduct();
          setTime();
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
                :class="{
                  'pointer-events-none': store.trueCheck || !store.time,
                }"
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
                        'bg-green-400':
                          store.checkedAnswer[store.step] == 'a' && !store.time,
                      }"
                      class="flex justify-between relative bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.a }}
                      <span
                        v-show="
                          !store.time &&
                          store.checkAnswer[store.step] != 'g' &&
                          store.trueCheck == 'a'
                        "
                      >
                        <i
                          v-show="
                            store.checkedAnswer[store.step] ==
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-check bg-[#04fc43] text-white border-2 border-black text-2xl rounded-full absolute right-2 top-0.5 px-1"
                        ></i>
                        <i
                          v-show="
                            store.checkedAnswer[store.step] !=
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-x bg-red-400 text-2xl rounded-full absolute right-2 top-1 px-1"
                        ></i>
                      </span>
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
                        'bg-green-400':
                          store.checkedAnswer[store.step] == 'b' && !store.time,
                      }"
                      class="relative bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.b }}
                      <span
                        v-show="
                          !store.time &&
                          store.checkAnswer[store.step] != 'g' &&
                          store.trueCheck == 'b'
                        "
                      >
                        <i
                          v-show="
                            store.checkedAnswer[store.step] ==
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-check bg-[#04fc43] text-white border-2 border-black text-2xl rounded-full absolute right-2 top-0.5 px-1"
                        ></i>
                        <i
                          v-show="
                            store.checkedAnswer[store.step] !=
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-x bg-red-400 text-2xl rounded-full absolute right-2 top-1 px-1"
                        ></i>
                      </span>
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
                        'bg-green-400':
                          store.checkedAnswer[store.step] == 'c' && !store.time,
                      }"
                      class="relative bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.c }}
                      <span
                        v-show="
                          !store.time &&
                          store.checkAnswer[store.step] != 'g' &&
                          store.trueCheck == 'c'
                        "
                      >
                        <i
                          v-show="
                            store.checkedAnswer[store.step] ==
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-check bg-[#04fc43] text-white border-2 border-black text-2xl rounded-full absolute right-2 top-0.5 px-1"
                        ></i>
                        <i
                          v-show="
                            store.checkedAnswer[store.step] !=
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-x bg-red-400 text-2xl rounded-full absolute right-2 top-1 px-1"
                        ></i>
                      </span>
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
                        'bg-green-400':
                          store.checkedAnswer[store.step] == 'd' && !store.time,
                      }"
                      class="relative bg-gray-50 hover:bg-[#04fc43] hover:text-white cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    >
                      {{ store.d }}
                      <span
                        v-show="
                          !store.time &&
                          store.checkAnswer[store.step] != 'g' &&
                          store.trueCheck == 'd'
                        "
                      >
                        <i
                          v-show="
                            store.checkedAnswer[store.step] ==
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-check bg-[#04fc43] text-white border-2 border-black text-2xl rounded-full absolute right-2 top-0.5 px-1"
                        ></i>
                        <i
                          v-show="
                            store.checkedAnswer[store.step] !=
                            store.checkAnswer[store.step]
                          "
                          class="bx bx-x bg-red-400 text-2xl rounded-full absolute right-2 top-1 px-1"
                        ></i>
                      </span>
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
                  @click="store.toggle = true"
                  v-show="store.time"
                  type="button"
                  class="text-gray-500 border inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Tugatish
                </button>
              </div>
              <div
                class="flex flex-wrap w-[70%] justify-center items-center gap-1 text-black"
              >
                <button
                  v-show="store.time"
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
                    getAllResults();
                  "
                >
                  {{ index + 1 }}
                </button>
                <button
                  v-show="!store.time"
                  class="flex justify-center items-center bg-gray-200 text-center font-medium w-7 h-7 rounded-full"
                  v-for="(i, index) in store.data.questions"
                  :key="i.id"
                  @click="
                    store.step = index;
                    showModal();
                    setData(store.step);
                    showAnswer(i.id);
                    getAllResults();
                  "
                >
                  <i
                    v-show="
                      store.checkedAnswer[index] == store.checkAnswer[index]
                    "
                    class="bx bxs-badge-check text-4xl text-[#27a827] mt-0.5"
                  ></i>
                  <i
                    v-show="
                      store.checkedAnswer[index] != store.checkAnswer[index]
                    "
                    class="bx bx-x text-xl px-1 bg-red-500 rounded-full text-white"
                  ></i>
                </button>
              </div>
              <div class="w-[15%] text-end">
                <button
                  @click="
                    createAnswer();
                    sendResult(false);
                  "
                  type="submit"
                  :class="{
                    'pointer-events-none hidden': store.trueCheck,
                    hidden: !store.time,
                  }"
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
import { onMounted, reactive, onUnmounted } from "vue";
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
  test_time_id: "",
  time: true,
  toggle: false,
  checkAnswer: [],
  checkedAnswer: [],
  questionStore: [],
});

function playSound() {
  let audio = new Audio(clickSound);
  audio.play();
}

function allResponse() {
  store.checkedAnswer = [];
  for (let i of store.data.questions) {
    store.questionStore.push(i.answers[0].question_id);
    store.checkedAnswer.push(i.answers[0].true_answer);
  }
}

function allAnswers() {
  let answers = false;
  store.checkAnswer = [];
  for (let i of store.questionStore) {
    for (let res of store.allResults) {
      if (i == res.question_id) {
        store.checkAnswer.push(res.answer);
        answers = false;
        break;
      } else {
        answers = true;
      }
    }
    if (answers) {
      store.checkAnswer.push("g");
    }
  }
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
  console.log(store.data?.questions[step]?.id);
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
      allResponse();
      store.question_id = res.data?.questions[0]?.id;
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
      allAnswers();
      getFinishTime();
      for (let i of store.allResults) {
        if (i.question_id == store.question_id) {
          store.trueCheck = i.answer;
        }
      }
    })
    .catch((error) => {
      notification.warning(error.response.data.message);
      console.log("error", error);
    });
};

const sendResult = (is_true) => {
  let answer = 0;
  for (let i in store.checkedAnswer) {
    if (store.checkAnswer[i] == store.checkedAnswer[i]) {
      answer += 1;
    }
  }

  const data = {
    is_submit: is_true,
    correct_answers: answer,
    student_id: localStorage.getItem("userId"),
    test_group_id: +router.currentRoute?.value?.params?.id,
  };
  axios
    .post(`/test-submit`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      if (res.data.is_submit) {
        store.time = false;
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const getFinishTime = () => {
  let student_id = localStorage.getItem("userId");
  let test_group_id = +router.currentRoute?.value?.params?.id;
  axios
    .get(`/test-submit/find/${student_id}/${test_group_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data, "finish time");
      allAnswers();
      allResponse();
      if (res.data[0].is_submit) {
        store.time = false;
        sendResult(true);
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const createTime = () => {
  getFinishTime();
  let date = new Date();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let h = Math.floor(store.test_time / 60);
  let m = Math.floor(store.test_time % 60);
  console.log(day, hour, minute);
  m += minute;
  if (m >= 60) {
    h += hour + 1;
    m = Math.floor(m % 60);
  } else {
    h += hour;
  }
  if (h >= 24) {
    day += 1;
    h = Math.floor(h % 24);
  }
  console.log(day, h, m);
  date.setDate(day);
  date.setHours(h);
  date.setMinutes(m);
  console.log(new Date(), date);
  const data = {
    start_time: new Date(),
    end_time: date,
    student_id: localStorage.getItem("userId"),
    test_group_id: +router.currentRoute?.value?.params?.id,
  };

  axios
    .post(`/test-time`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      store.test_time_id = res.data.id;
      let date = new Date(res.data.end_time);
      let now = new Date();

      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();

      let d = now.getDate();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      if (d > day) {
        sendResult(true);
        store.time = false;
      } else {
        now = hour * 3600 + minute * 60 + second - h * 3600 - m * 60 - s;
        console.log(now);
        if (now > 0) {
          hour = Math.floor(now / 3600);
          minute = Math.floor((now % 3600) / 60);
          second = (now % 3600) % 60;
          timer.changeTime(hour, minute, second);
        } else {
          sendResult(true);
          store.time = false;
        }
      }
    })
    .catch((error) => {
      if (error.response?.data?.message.length <= 1) {
        if (
          i == "Talaba ID si matn shaklida bo'lishi zarur!" ||
          i == "Iltimos, talaba ID sini kiriting!"
        ) {
          router.push("/login");
        }
        console.log("error", error);
        return;
      }
      for (let i of error.response?.data?.message) {
        if (
          i == "Talaba ID si matn shaklida bo'lishi zarur!" ||
          i == "Iltimos, talaba ID sini kiriting!"
        ) {
          router.push("/login");
        }
      }
      console.log("error", error);
    });
};

const createAnswer = () => {
  if (!store.time) {
    notification.warning("Test vaqti tugagan!");
    return;
  }
  const data = {
    answer: store.true_answer,
    test_group_id: +router.currentRoute?.value?.params?.id,
    question_id: store.question_id,
    test_time_id: store.test_time_id,
    student_id: localStorage.getItem("userId"),
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
      // allResponse();
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

const setTime = () => {
  if (!store.time) {
    return;
  }
  let student_id = localStorage.getItem("userId");
  let test_group_id = +router.currentRoute?.value?.params?.id;
  axios
    .get(`/test-time/find/${student_id}/${test_group_id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      console.log(res.data[0]?.end_time);
      let date = new Date(res.data[0]?.end_time);
      let now = new Date();
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let d = now.getDate();
      let h = now.getHours();
      let m = now.getMinutes();

      if (d > day) {
        sendResult(true);
        store.time = false;
      } else {
        now = hour * 60 + minute - h * 60 - m;
        if (now > 0) {
          timer.Hours = Math.floor(now / 60);
          timer.Minutes = now % 60;
        } else {
          sendResult(true);
          store.time = false;
        }
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

onMounted(() => {
  getOneProduct();
  getAllResults();
  window.addEventListener("onunmount", () => {
    prompt("Hello");
  });
});
</script>

<style lang="scss" scoped></style>
