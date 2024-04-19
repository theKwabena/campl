<script setup lang="ts">
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




</script>

<template>
  <div class="px-10 py-5">
    <div class="flex flex-col">
      <p class="text-xs text-[#444444]"> Lesson - {{lesson.number}}</p>
      <p class="text-2xl"> {{lesson.title}}</p>
      <div class="flex space-x-5 py-2">
        <button class="underline text-xs"> Download Source Code</button>
        <button class="underline text-xs"> Download Source Code</button>
      </div>
    </div>
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <video-player :video-id="lesson.videoId" />
      </div>
      <div class="grid-cols-1">
        <p class="text-wrap"> {{lesson.text}}</p>
        <div class="flex flex-col py-2">
          <button class="underline text-xs"> Download Source Code</button>
          <button class="underline text-xs"> Download Source Code</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>