<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const courses = await useCourse()
const head  = useAppHead()


useHead({
  title : `${head} - Free Programming Lessons`
})
</script>

<template>
  <div>
    <ul v-for="course in courses" :key="course.id">
      <li class="flex p-10 bg-blue-300">
        <div class="bg-red-500">
          <NuxtLink :to="`/courses/${course.slug}`"> {{course.title}} </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>