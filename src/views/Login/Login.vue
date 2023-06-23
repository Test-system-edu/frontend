<template>
    <div class="flex justify-center items-center min-h-screen bg-cover bg-center"
        style="background-image: url('../../assets/img/bg.png')">
        <div class="w-[500px] p-10 bg-white rounded-xl bg-opacity-70">
            <img class="w-[120px] ml-36" src="../../assets/img/tatu.png" alt="">
            <h1 class="text-[28px] font-bold flex justify-center py-5">Tizimga kirish</h1>
            <form>
                <div class="mb-4">
                    <label for="email" class="block mb-2 font-semibold">Login</label>
                    <input type="email" id="email" v-model="email" class="w-full p-[10px] border rounded-[9px]"
                        placeholder="login" required />
                </div>
                <div class="mb-4">
                    <label for="password" class="block mt-9 mb-2 font-semibold">Parol</label>
                    <input type="password" id="password" v-model="password" class="w-full p-[10px] border rounded-[9px]"
                        placeholder="••••••••" required />
                </div>
                <div class="flex items-center mb-4 justify-between">
                    <div>
                        <input class="mr-3 h-[15px] w-[15px] rounded-[10px]" type="checkbox" />
                        <label for="remember" class="text-gray-500">Eslab qolish</label>
                    </div>
                    <a href="#" class="font-semibold my-5">Parolni unutdingizmi?</a>
                </div>
                <button type=""
                    class="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-900 hover:border-blue-900 py-[10px]  rounded-md">
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>
  
    
<script setup>
</script>  