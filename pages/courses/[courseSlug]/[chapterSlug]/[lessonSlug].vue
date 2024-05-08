<script setup lang="ts">
import {useAppHead} from "~/composables/useHeadData";

const head = useAppHead()
const route = useRoute()

const courses = useCourse()

const course = computed(()=>{
  return courses.find(
      (course)=> course.slug === route.params.courseSlug
  )
})

const chapter = computed(()=>{
  return course.value ? course.value.chapters.find(
      (chapter)=> chapter.slug === route.params.chapterSlug
  ) : null
})


const lesson = computed(()=>{
  return chapter.value?  chapter.value.lessons.find((lesson)=> lesson.slug === route.params.lessonSlug) : null
})

useHead({
  title : `${head} | ${course.value.title} | ${lesson.value.title}`
})

const progress = useState('progress', ()=>{
  return []
})

const isLessonComplete = computed(()=>{
  if(!progress.value[chapter.value.number-1]){
    return false
  }
  if(!progress.value[chapter.value.number-1][lesson.value.number-1]){
    return false
  }

  return progress.value[chapter.value.number-1][lesson.value.number-1]
})

function toggleComplete(){
  if(!progress.value[chapter.value.number-1]){
    return progress.value[chapter.value.number-1] = [];
  }

  progress.value[chapter.value.number-1][lesson.value.number-1] = !isLessonComplete.value;
}
</script>

<template>
  <div class="px-10 py-5">
    <div class="flex flex-col">
      <p class="text-xs text-[#444444]"> Lesson - {{lesson.number}}</p>
      <p class="text-2xl"> {{lesson.title}}</p>
      <div class="flex space-x-5 py-2">
        <button class="underline text-sm"> Download Video</button>
        <button class="underline text-sm"> Download Source Code</button>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <video-player :video-id="lesson.videoId" class=""/>
      </div>
      <div class="grid-cols-1 -ml-40 space-y-3">
        <p class="text-wrap"> {{lesson.text}}</p>
        <div class="flex space-x-1">
          <LessonCompleteButton :model-value="isLessonComplete" @update:model-value="toggleComplete" />
<!--          <button class="underline text-sm border border-black p-2 px-4"> Mark As Complete</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>