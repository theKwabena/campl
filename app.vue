<template>
  <div class="grid grid-cols-12 py-10 min-h-screen">
    <div class="col-start-2 col-span-9 col-end-12">
      <NuxtLayout>
        <Navbar />
        <NuxtPage />
        <Footer class="sticky top-[100vh]"/>
      </NuxtLayout>
    </div>

  </div>

</template>
<script setup lang="ts">

</script>