<template>
  <div
    class="base flex justify-center items-center min-h-screen bg-cover bg-center"
  >
    <div class="w-[400px] md:w-[500px] p-10 bg-white rounded-xl bg-opacity-60">
      <img
        class="w-24 sm:w-[120px] mx-auto"
        src="../../assets/img/tatu.png"
        alt=""
      />
      <h1 class="text-2xl sm:text-[28px] font-bold text-center py-5">
        Tizimga kirish
      </h1>
      <form @submit.prevent="formInfo">
        <div class="mb-4">
          <label for="email" class="block mb-2 font-semibold">Login</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-2 sm:p-[10px] border rounded-[9px]"
            placeholder="login"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block mt-3 sm:mt-9 mb-2 font-semibold"
            >Parol</label
          >
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="w-full p-2 sm:p-[10px] border rounded-[9px]"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="flex items-center mb-4 justify-between">
          <div>
            <input
              class="mr-2 mb-1 h-3 w-3 sm:h-[15px] sm:w-[15px] rounded-md"
              type="checkbox"
            />
            <label for="remember" class="text-gray-500">Eslab qolish</label>
          </div>
          <a href="#" class="font-semibold my-5">Parolni unutdingizmi?</a>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900 py-2 sm:py-[10px] rounded-md"
        >
          Kirish
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "@/services/axios";
import { useRouter } from "vue-router";
import { useNotificationStore } from "../../stores/notification"
const notification = useNotificationStore();
const router = useRouter();

const form = reactive({
  password: "",
  email: "",
});

const formInfo = () => {
  console.log(form.email, form.password);
  axios
    .post("admin/login", {
      email: form.email,
      password: form.password,
    })
    .then((res) => {
      if (res.status == 201) {
        notification.success('Welcome!');
        localStorage.setItem("AdminToken", res.data.access_token);
        router.push("/");
      } else {
        error('Error');
      }
    })
    .catch((error) => {
      if (error.response.status == 400) {
        notification.warning(error.response.data.message);
      } else {
        notification.error(error.response.data.message);
      }
      console.log(error);
    });
};
</script>

<style lang="scss" scoped>
.base {
  background: url("../../assets/img/bg.png");
}
</style>
