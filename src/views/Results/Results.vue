<template>
  <div class="container mx-auto py-4 px-2">
    <!------------------------------------------- Placeholder ------------------------------------------->
    <div v-show="!store.data">
      <Placeholder2 />
    </div>
    <!------------------------------------------- Placeholder ------------------------------------------->

    <!------------------------------------------- Search ------------------------------------------->
    <div
      class="shadow rounded-xl flex flex-col lg:flex-row items-center justify-between lg:space-x-4 p-4 mb-4"
      :class="navbar.userNav ? 'bg-[#203843]' : 'bg-white'"
    >
      <div
        class="w-full flex items-center lg:justify-start justify-between gap-5"
      >
        <h1 class="text-blue-700 font-bold text-3xl">Natijalar</h1>
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
          <tbody>
            <tr
              class="border-b cursor-pointer"
              :class="navbar.userNav ? 'hover:bg-gray-700' : 'hover:bg-gray-50'"
              v-for="result in examResults"
              :key="result.id"
            >
              <td class="py-3 pr-6 pl-8 flex items-center gap-3">
                <img
                  :src="result.imageUrl"
                  alt="img"
                  class="h-12 w-12 object-cover object-center rounded-full"
                />
                <p class="whitespace-nowrap mr-3">{{ result.name }}</p>
              </td>
              <td class="py-3 px-6 font-bold text-[green]">
                {{ result.isPassed }}
              </td>
              <td class="py-3 px-6 font-bold text-[red]">
                {{ result.isFailed }}
              </td>
              <td class="py-3 px-6 font-bold">{{ result.grade }}</td>
              <td class="py-3 px-6 font-bold">{{ result.score }}</td>
              <td class="py-3 px-6 whitespace-nowrap text-center">
                {{ result.timeSpent }}
              </td>
              <td class="text-center font-medium px-8 py-3">
                <button
                  @click="enterSlug(i, 'Qobilov Shoxsuvor')"
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
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useNavStore } from "../../stores/toggle";
import { Placeholder2 } from "../../components";
const navbar = useNavStore();
const router = useRouter();

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

const store = reactive({
  data: false,
});

function enterSlug(id, name) {
  name = name.toLowerCase().split(" ").join("_");
  router.push(`./results/${id}/${name}`);
}

setTimeout(() => {
  store.data = true;
}, 1000);

const examResults = ref([
  {
    id: 1,
    name: "John Doe",
    isPassed: "23",
    isFailed: "7",
    grade: "Excellent",
    score: 92,
    timeSpent: "2 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/218/322/342/john-doe-vigilante-wallpaper-preview.jpg",
  },
  {
    id: 2,
    name: "Robert Lewangoalski",
    isPassed: "23",
    isFailed: "7",
    grade: "Poor",
    score: 33,
    timeSpent: "1 hour",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/441/496/1022/soccer-robert-lewandowski-robert-lewandowski-wallpaper-preview.jpg",
  },
  {
    id: 3,
    name: "Dwayne Johnson",
    isPassed: "23",
    isFailed: "7",
    grade: "Average",
    score: 76,
    timeSpent: "3 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/259/859/646/chain-actor-the-rock-dwayne-johnson-dwayne-johnson-the-rock-hd-wallpaper-preview.jpg",
  },
  {
    id: 4,
    name: "Paul Walker",
    isPassed: "23",
    isFailed: "7",
    grade: "Average",
    score: 61,
    timeSpent: "2 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/875/627/582/fast-furious-movies-paul-wallpaper-preview.jpg",
  },
  {
    id: 5,
    name: "Harry Potter",
    isPassed: "23",
    isFailed: "7",
    grade: "Poor",
    score: 45,
    timeSpent: "1.5 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/653/948/13/harry-potter-hogwarts-lantern-castle-wallpaper-preview.jpg",
  },
  {
    id: 6,
    name: "Edvard Bill",
    isPassed: "23",
    isFailed: "7",
    grade: "Excellent",
    score: 95,
    timeSpent: "2 hours",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzHgtFeTmsoY0uD9HovuiBVUXe1a7oNa7YA&usqp=CAU",
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    isPassed: "23",
    isFailed: "7",
    grade: "Perfect",
    score: 100,
    timeSpent: "2.5 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg",
  },
  {
    id: 8,
    name: "Leo Messi",
    isPassed: "23",
    isFailed: "7",
    grade: "Poor",
    score: 23,
    timeSpent: "1 hour",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/642/137/247/lionel-messi-celebrating-leo-messi-wallpaper-preview.jpg",
  },
  {
    id: 9,
    name: "Mike Tyson",
    isPassed: "23",
    isFailed: "7",
    grade: "Average",
    score: 77,
    timeSpent: "3 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg",
  },
  {
    id: 10,
    name: "Elon Musk",
    isPassed: "23",
    isFailed: "7",
    grade: "Excellent",
    score: 92,
    timeSpent: "2 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg",
  },
  {
    id: 11,
    name: "Jamal Musiala",
    isPassed: "23",
    isFailed: "7",
    grade: "Poor",
    score: 53,
    timeSpent: "1.5 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg",
  },
  {
    id: 12,
    name: "Gianluigi Buffon",
    isPassed: "23",
    isFailed: "7",
    grade: "Poor",
    score: 37,
    timeSpent: "2 hours",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg",
  },
]);
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
