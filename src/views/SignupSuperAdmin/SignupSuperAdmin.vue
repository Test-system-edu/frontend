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
      <h1 class="text-xl sm:text-[24px] font-bold text-center py-2">
        Super admin
      </h1>
      <form @submit.prevent="formInfo">
        <div class="flex flex-col gap-3">
          <div>
            <label for="fullname" class="block font-semibold">F. I. O.</label>
            <input
              type="fullname"
              id="fullname"
              v-model="form.full_name"
              class="p-2 w-full sm:p-[10px] border rounded-[9px]"
              placeholder="To'liq ism"
              required
            />
          </div>
          <div>
            <label for="tel" class="block font-semibold">Telefon raqam</label>
            <input
              type="tel"
              id="tel"
              v-model="form.phone_number"
              class="p-2 w-full sm:p-[10px] border rounded-[9px]"
              placeholder="+998 99 999 99 99"
              required
            />
          </div>
          <div>
            <label for="login" class="block font-semibold">Login</label>
            <input
              type="text"
              id="login"
              v-model="form.login"
              class="p-2 w-full sm:p-[10px] border rounded-[9px]"
              placeholder="Login"
              required
            />
          </div>
          <div>
            <label for="password" class="block font-semibold">Parol</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              class="p-2 w-full sm:p-[10px] border rounded-[9px]"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 mt-4 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900 py-2 sm:py-[10px] rounded-md"
        >
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import axios from "@/services/axios";
import { useRouter } from "vue-router";
import { useNotificationStore } from "../../stores/notification";
const notification = useNotificationStore();
const router = useRouter();

const form = reactive({
  login: "",
  password: "",
  full_name: "",
  phone_number: "",
  role: "superadmin",
});

const formInfo = () => {
  axios
    .post("staff/signup", {
      login: form.login,
      password: form.password,
      full_name: form.full_name,
      phone_number: form.phone_number,
      role: "superadmin",
    })
    .then((res) => {
      if (res.status == 201) {
        router.push("/login");
      } else {
        notification.warning(res?.data?.message);
      }
    })
    .catch((error) => {
      notification.warning(error?.response?.data?.message);
      console.log(error);
    });
};
</script>

<style lang="scss" scoped>
.base {
  background: url("../../assets/img/bg.png");
}
</style>
