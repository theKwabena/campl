<script setup lang="ts">
import ArrowDown from "assets/icons/arrow-down.svg";
import ArrowUp from "assets/icons/arrow-up.svg"


const props = defineProps({
  course_slug : {
    type : String,
    required : true
  },
  title : {
    type :String,
    required: true
  },
   chapter : {
    type : Object,
     required: true
   }
})



const dropdownHide = ref(true)

function toggleDropDown(){
  dropdownHide.value = !dropdownHide.value
}

</script>

<template>
  <div class="border-2 bg-def rounded-sm border-black my-1 py-2 px-7 ">
    <div class="flex justify-between items-center cursor-pointer" @click="toggleDropDown">
      <NuxtLink :to="`${props.course_slug}/${props.chapter.slug}`"> {{props.chapter.title}}</NuxtLink>
      <ArrowDown v-if="dropdownHide" class="w-6 h-6" :fontControlled="false"/>
      <ArrowUp v-else class="w-6 h-6 text-yellow-100" :fontControlled="false"/>
    </div>
    <div class="space-y-2 flex flex-col py-4" :class="{ 'hidden' : dropdownHide}">
      <NuxtLink class="bg-yellow-500 px-2" :to="`/courses/${props.course_slug}/${props.chapter.slug}/${lesson.slug}`" v-for="(lesson,index) in props.chapter.lessons" :key="lesson.number">{{index+1}}. {{lesson.title}}</NuxtLink>
    </div>
  </div>

</template>

<style scoped>

</style>