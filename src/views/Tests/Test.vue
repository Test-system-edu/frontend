<template>
    <div class="container mx-auto p-5  bg-gray-50">
        <!-- ----------------------------------------- MODAL -------------------------------------------------------- -->

        <!-- Main modal -->
        <div tabindex="-1" aria-hidden="true" :class="modal
            ? 'overflow-y-auto flex bg-[rgba(0,0,0,0.5)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full'
            : 'hidden'
            ">
            <div class="relative p-4 w-full max-w-5xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg text-gray-900 dark:text-white">
                            Yangi savolni qo'shish
                        </h3>
                        <button @click="toggleModal" type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form action="#">
                        <div class="grid sm:flex sm:flex-col gap-4 mb-4 sm:grid-cols-2">
                            <div class="sm:w-[50%]">
                                <label for="name"
                                    class="block mb-2 text-sm text-center text-amber-900 font-medium bg-amber-200 rounded-[5px] py-0.5 dark:text-white">Qaysi
                                    fanga qo'shmoqchisiz ?</label>
                                <select id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                    <option selected disabled>Tanlang</option>
                                    <option value="smm">SMM</option>
                                    <option value="dizayn">DIZAYN</option>
                                    <option value="dasturlash">DASTURLASH</option>
                                </select>
                            </div>

                            <div>
                                <label for="phone" class="block mb-2 text-sm text-gray-900 dark:text-white">Savol
                                    matni:</label>
                                <textarea name="" id="" cols="30" rows="10"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                    placeholder="Savolni yozing.."></textarea>
                            </div>

                            <div class="w-full flex flex-col sm:flex-row justify-between gap-8 sm:mb-20">
                                <div class="sm:w-[50%] flex flex-col gap-5">
                                    <div>
                                        <label for="a"
                                            class="block mb-2 text-sm text-blue-800 text-center font-medium bg-blue-100 py-0.5 rounded-[5px] uppercase">Variant:
                                            A</label>
                                        <input type="text" name="a" id="a"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                            placeholder="A variantni kiriting" />
                                    </div>

                                    <div>
                                        <label for="b"
                                            class="block mb-2 text-sm text-blue-800 text-center font-medium bg-blue-100 py-0.5 rounded-[5px] uppercase">Variant:
                                            B</label>
                                        <input type="text" name="b" id="b"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                            placeholder="B variantni kiriting" />
                                    </div>

                                    <div>
                                        <label for="c"
                                            class="block mb-2 text-sm text-blue-800 text-center font-medium bg-blue-100 py-0.5 rounded-[5px] uppercase">Variant:
                                            C</label>
                                        <input type="text" name="c" id="c"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                            placeholder="C variantni kiriting" />
                                    </div>
                                </div>

                                <div class="sm:w-[50%]">
                                    <label for="category"
                                        class="block mb-2 text-sm font-medium text-center bg-green-100 py-0.5 rounded-[5px] text-green-800">Tog'ri
                                        javobni belgilang</label>
                                    <select id="category"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                        <option selected disabled>Javobni belgilang</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex items-center justify-between border-t pt-5 mt-5">
                            <button type="submit"
                                class="text-gray-500 border inline-flex items-center bg-white hover:bg-red-700 hover:border-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Bekor qilish
                            </button>
                            <button type="submit"
                                class="btnAdd text-white inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Qo'shish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- ----------------------------------------- MODAL END ---------------------------------------------------- -->


        <!-- ----------------------------------------- EMPLYE TABLE ------------------------------------------------- -->

        <section class="dark:bg-gray-900 p-0 sm:p-5 md:p-0 md:py-4">
            <div class="w-full max-w-screen px-0 lg:p-0">
                <!-- Start coding here -->
                <div
                    class="bg-white flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 mb-3">
                    <div class="w-full flex items-center gap-5">
                        <h1 class="text-blue-700 font-semibold">Testlar</h1>
                        <div
                            class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3">
                            <button @click="toggleModal" id="" type="button"
                                class="btnAdd flex items-center justify-center border border-gray-200 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">
                                Test qo'shish
                            </button>
                        </div>
                    </div>

                    <div class="w-full md:w-60">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Qidiruv</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Izlash uchun yozing .." />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 rounded-lg uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="text-center py-3">Fan nomi</th>
                                    <th scope="col" class="text-center py-3">Savol va Javob</th>
                                    <th scope="col" class="text-center py-3">Holati</th>
                                    <th scope="col" class="text-center py-3">To'liq</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row"
                                        class="text-center px-8 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        SMM
                                    </th>
                                    <td class="text-center font-medium text-blue-800 px-8 py-2">
                                        <button @click="toggleSee"
                                            class="bg-blue-100 rounded-[5px] py-2 px-5 text-center border border-blue-100 hover:border-blue-800 focus:ring-4 focus:ring-blue-300">Ko'rish
                                            ..</button>
                                    </td>
                                    <td class="text-center font-medium text-green-800 px-8 py-2">
                                        <p class="bg-green-100 rounded-[5px] py-1">active</p>
                                    </td>
                                    <td class="text-center font-medium px-8 py-3">
                                        <button class="
                          btnKirish bg-blue-600 rounded-lg px-5 py-2.5 text-white focus:ring-2
                          ">
                                            Kirish
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                        aria-label="Table navigation">
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Sahifa
                            <span class="font-semibold text-gray-900 dark:text-white">1 - 10</span>
                            dan
                            <span class="font-semibold text-gray-900 dark:text-white">10</span>
                        </span>
                        <ul class="inline-flex items-stretch -space-x-px">
                            <li>
                                <a href="#"
                                    class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">next
                                    >></a>
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
import { ref } from "vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

const see = ref(false);
const toggleSee = () => (see.value = !see.value);
</script>
  
<style lang="scss" scoped>
.btnAdd {
    background-image: linear-gradient(to right, rgb(139, 255, 203) -250%, #136f4f);
}

.btnKirish {
    background-image: linear-gradient(to right, rgb(139, 255, 232) -250%, #046f80);

}

.btnOrqaga {
    background-image: linear-gradient(to right, rgb(138, 183, 254) -250%, #2f73f0);
}

// #056674</style>
  