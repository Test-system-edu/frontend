<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Exam Results</h1>
        <table class="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="py-3 px-6 text-left pl-20">Name</th>
                    <th class="py-3 px-6 text-left">Passed/Failed</th>
                    <th class="py-3 px-6 text-left">Grade</th>
                    <th class="py-3 px-6 text-left">Score</th>
                    <th class="py-3 px-6 text-left">Time Spent</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in examResults" :key="result.id">
                    <td class="py-3 pr-6 flex items-center"><img :src="result.imageUrl" alt="" class="h-12 w-[70px] rounded-full mr-2">{{ result.name }}</td>
                    <td class="py-3 px-6">{{ result.isPassed }}</td>
                    <td class="py-3 px-6 font-bold">{{ result.grade }}</td>
                    <td class="py-3 px-6 font-bold">{{ result.score }}</td>
                    <td class="py-3 px-6">{{ result.timeSpent }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const examResults = ref([
    { id: 1, name: 'John Doe', isPassed: "✅", grade: "Excellent", score: 92, timeSpent: '2 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/218/322/342/john-doe-vigilante-wallpaper-preview.jpg" },
    { id: 2, name: 'Robert Lewangoalski', isPassed: "❌", grade: "Poor", score: 33, timeSpent: '1 hour', imageUrl: "https://c4.wallpaperflare.com/wallpaper/441/496/1022/soccer-robert-lewandowski-robert-lewandowski-wallpaper-preview.jpg" },
    { id: 3, name: 'Dwayne Johnson', isPassed: "✅", grade: "Average", score: 76, timeSpent: '3 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/259/859/646/chain-actor-the-rock-dwayne-johnson-dwayne-johnson-the-rock-hd-wallpaper-preview.jpg" },
    { id: 4, name: 'Paul Walker', isPassed: "✅", grade: "Average", score: 61, timeSpent: '2 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/875/627/582/fast-furious-movies-paul-wallpaper-preview.jpg" },
    { id: 5, name: 'Harry Potter', isPassed: "❌", grade: "Poor", score: 45, timeSpent: '1.5 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/653/948/13/harry-potter-hogwarts-lantern-castle-wallpaper-preview.jpg" },
    { id: 6, name: 'Edvard Bill', isPassed: "✅", grade: "Excellent", score: 95, timeSpent: '2 hours', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzHgtFeTmsoY0uD9HovuiBVUXe1a7oNa7YA&usqp=CAU" },
    { id: 7, name: 'Cristiano Ronaldo', isPassed: "✅", grade: "Perfect", score: 100, timeSpent: '2.5 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg" },
    { id: 8, name: 'Leo Messi', isPassed: "❌", grade: "Poor", score: 23, timeSpent: '1 hour', imageUrl: "https://c4.wallpaperflare.com/wallpaper/642/137/247/lionel-messi-celebrating-leo-messi-wallpaper-preview.jpg" },
    { id: 9, name: 'Mike Tyson', isPassed: "✅", grade: "Average", score: 77, timeSpent: '3 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg" },
    { id: 10, name: 'Elon Musk', isPassed: "✅", grade: "Excellent", score: 92, timeSpent: '2 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg" },
    { id: 11, name: 'Jamal Musiala', isPassed: "❌", grade: "Poor", score: 53, timeSpent: '1.5 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg" },
    { id: 12, name: 'Gianluigi Buffon', isPassed: "❌", grade: "Poor", score: 37, timeSpent: '2 hours', imageUrl: "https://c4.wallpaperflare.com/wallpaper/874/671/650/soccer-cristiano-ronaldo-portuguese-wallpaper-preview.jpg" },
]);
</script>
  
<style lang="scss" scoped></style>
  