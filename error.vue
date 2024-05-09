<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="h-full flex flex-col justify-center items-center">
        <h2 class="text-4xl">Oops☹️!</h2>
        <p> {{error.message}}</p>
        <button @click="handleError">Go home</button>
      </div>

    </NuxtLayout>

  </div>
</template>