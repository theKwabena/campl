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
    <h1> Welcome to  theClass </h1>
    <p> Here are our courses</p>
    <ul v-for="course in courses" :key="course.id">
      <li>
        <NuxtLink :to="`/courses/${course.slug}`"> {{course.title}} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>