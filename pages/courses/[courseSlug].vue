<script setup lang="ts">

import {useAppHead} from "~/composables/useHeadData";
import type {ComputedRef} from "vue";

const route = useRoute()
const courses = useCourse()
const head = useAppHead()

console.log(courses.length)
useHead({
  title : `${head} | Courses`
})
const course = computed(()=>{
  return courses.find(
      (course)=> course.slug === route.params.courseSlug
  )
})

const chapters = computed(()=>{
  return course.value ? course.value.chapters : null
})

function resetError(error: { value: null; }){
  error.value = null;
}

// const lessons = computed(()=>{
//   return chapters.value ? chapters
// })

</script>

<template>
  <div class="grid grid-cols-12 py-1 gap-1">
    <div class="col-span-3 overflow-scroll max-h-[75vh] content-container">
      <div class="min-w-full border-2 rounded-sm border-black m-auto p-10 text-center bg-white">
        <p> {{course.title}}</p>
      </div>
      <ul v-for="chapter in chapters" >
        <li>
          <ChapterCard :course_slug="`${course.slug}`" :title="chapter.title" :chapter="chapter"/>
        </li>

      </ul>
    </div>
    <div class="col-span-9">
      <div class="border-black rounded-sm border-2 h-[75vh] bg-[#b3d88d]">
        <div v-if="!$route.params.lessonSlug" class="flex flex-col justify-center items-center py-10 h-full">
          <p> Welcome to </p>
          <h1 class="text-3xl"> {{course.title}}</h1>
          <hr/>
          <div class="flex items-center w-2/3 my-2">
            <div class="flex-1 border-t border-gray-400"></div>
            <span class="px-3 my-2 bg-[#308280] text-white">{{course.chapters.length}} courses  |
            {{ course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0) }} lessons</span>
            <div class="flex-1 border-t border-gray-400"></div>
          </div>


        </div>
        <NuxtErrorBoundary v-else>
          <NuxtPage></NuxtPage>
          <template #error="{ error }">
            <p> Oh something happenend. Can't continue</p>
            <code> {{ error }}</code>
            <button @click="resetError(error)">
              Reset Error
            </button>
          </template>
        </NuxtErrorBoundary>

      </div>

    </div>

  </div>
</template>

<style scoped>
.content-container {
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
</style>