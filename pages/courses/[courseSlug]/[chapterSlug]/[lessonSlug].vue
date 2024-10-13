<script setup lang="ts">
import type {Course} from "~/types/course";

const route = useRoute();
const { courseSlug, chapterSlug, lessonSlug } = route.params;

const lesson = await useLesson(courseSlug as string,chapterSlug as string,lessonSlug as string)
console.log(lesson)

definePageMeta({
  middleware: [ async  function({params},from){
    const courses = await useCourse();

    const course =courses.value.find((course : Course)=> course.slug==params.courseSlug)

    if(!course){
      return abortNavigation(
            createError({
            statusCode: 404,
            message: 'Course not found'
          })
      );

    }

    const chapter = course.chapters.find(
        (chapter) => chapter.slug == params.chapterSlug
    )

    if(!chapter){
      return abortNavigation(
          createError({
            statusCode: 404,
            message: 'Chapter not found'
          })
      );
    }

    const lesson = chapter.lessons.find((lesson)=> lesson.slug == params.lessonSlug)

    if(!lesson){
      return abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found"
          })
      );
    }
  }, "auth"]
  // validate({params}){
  //   const courses =useCourse();
  //
  //   const courses =courses.find((courses)=> courses.slug==params.courseSlug)
  //
  //   if(!courses){
  //     throw createError({
  //       statusCode: 404,
  //       message: 'Course not found'
  //     })
  //   }
  //
  //   const chapters = courses.chapters.find(
  //       (chapters) => chapters.slug == params.chapterSlug
  //   )
  //
  //   if(!chapters){
  //     throw createError({
  //       statusCode: 404,
  //       message: 'Chapter not found'
  //     })
  //   }
  //
  //   const [lesson] = chapters.lessons.find(([lesson])=> [lesson].slug == params.lessonSlug)
  //
  //   if(![lesson]){
  //     throw createError({
  //       statusCode: 404,
  //       message: "Lesson not found"
  //     })
  //   }
  //   return true
  // }
})

const head = useAppHead()


const courses = await useCourse()


const course = computed(()=>{
  return courses.value.find(
      (course)=> course.slug === route.params.courseSlug
  )
})


const chapter = computed(()=>{
  return course.value ? course.value.chapters.find(
      (chapter)=> chapter.slug === route.params.chapterSlug
  ) : null
})
//
//
//
//
// const lesson = computed(()=>{
//   return chapter.value?  chapter.value.lessons.find((lesson)=> lesson.slug === route.params.lessonSlug) : null
// })

// useHead({
//   title : `${head} | ${course.value.title} | ${lesson.value.title}`
// })

// const progress = useState('progress', ()=>{
//   return []
// })

const progress = useLocalStorage('progress', [])
// This is an empty array on the server but may not be empty on the server

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
    progress.value[chapter.value.number-1] = [];
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
          <LessonCompleteButton
              :model-value="isLessonComplete"
              @update:model-value="toggleComplete"
          />
<!--          <button class="underline text-sm border border-black p-2 px-4"> Mark As Complete</button>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>