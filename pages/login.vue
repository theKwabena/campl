<script setup lang="ts">
definePageMeta({
  layout : false
})
</script>

<template>
<div>
  <div class="flex flex-col space-y-10 justify-center items-center h-screen">
    <h1 class="font-black text-2xl"> theClass 101</h1>
    <form class="flex flex-col space-y-8">
      <div class="block h-8 shadow-md bg-black border-2">
        <input
            type="text"
            class="focus:outline-none px-2 py-1 border-black border-2 -translate-x-[3px] -translate-y-[10.5px] active:ring-0 active:outline-0 hover:-translate-y-3"
            placeholder="username"
        >
      </div>

      <div class="block h-8 shadow-md bg-black border-2">
        <input
            type="password"
            class="focus:outline-none px-2 py-1 border-black border-2 -translate-x-[3px] -translate-y-[10.5px] active:ring-0 active:outline-0 hover:-translate-y-3"
            placeholder="enter password"
        >
      </div>
      <button class="bg-black">
        <span
            class="block p-1 bg-amber-500 -translate-x-[3px] -translate-y-1 active:translate-x-0 active:translate-y-0""
        >
            Login
        </span>

      </button>
    </form>
  </div>

</div>
</template>

<style scoped>

</style>