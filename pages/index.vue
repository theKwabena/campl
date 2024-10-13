<template>
  <div class="h-screen bg-def">
    <div class="bg-white p-5 px-20 flex justify-between items-center border-b-2 border-black">
      <div>
        <p> The Class</p>
      </div>

      <div class="space-x-5">
        <NuxtLink :to="courses"> Courses</NuxtLink>
        <NuxtLink> About</NuxtLink>
        <NuxtLink> Pricing</NuxtLink>
        <NuxtLink> Special Offers</NuxtLink>
      </div>

      <div class="space-x-5">
        <NuxtLink>Login</NuxtLink>
        <button class="bg-black">
        <span class="block p-1 px-5 bg-amber-500 -translate-x-[3px] -translate-y-1 active:translate-x-0 active:translate-y-0">
            Join for free
        </span>
        </button>
      </div>
    </div>

    <div class="p-32 flex justify-between mx-36">
      <div class="w-6/12 space-y-8">

        <p class="text-7xl font-bold">  <span><NuxtImg src="/illustrations/curly-line.svg" class="absolute top-40 left-52"/></span> Explore limitless learning with <span> <NuxtImg src="/illustrations/circle.svg" class="absolute top-[18%]"/> </span> CaMpl</p>
        <NuxtImg src="/illustrations/pointer.svg" class="absolute top-[32%] left-[48%] h-10 w-10" />
        <p class="text-sm leading-6">
          Explore a diverse range of expert-curated courses caters to learners of all backgrounds and interests.
          Join a vibrant community, engage in flexible learning, and embark on a journey of self-discovery.
          Start exploring today and unleash your full potential!</p>

        <div class="space-x-3">
          <button class="bg-black">
            <span class="block p-1 px-5 bg-amber-500 border-2 border-black -translate-x-[3px] -translate-y-[4px] active:translate-x-0 active:translate-y-0">
                Get Started
            </span>
          </button>
          <button class="bg-black">
            <span class="block p-1 px-5 bg-home border-2 border-black -translate-x-[3px] -translate-y-[4px] active:translate-x-0 active:translate-y-0">
                Learn More >
            </span>
          </button>
        </div>

      </div>

      <div>
        <div class="block w-full">
          <NuxtImg src="/illustrations/student.svg" alt="students" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false
})

</script>

<style lang="scss" scoped>

</style>