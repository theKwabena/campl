<script lang="ts" setup>
const user = useSupabaseUser();

const { auth }  = useSupabaseClient();

const username = computed(()=> {
  return user.value?.user_metadata.user_name
})

const user_avatar  = computed(()=>{
  return user.value?.user_metadata.avatar_url
})


const logout = async () =>{
  const { error } = await auth.signOut();

  if(error){
    console.log(error)
    return;
  }

}


</script>

<template>
  <div class="flex justify-between border-2 py-2 px-2 border-black items-center font-soehne">
    <div class="">
      <h1> THE SCHOOL</h1>
    </div>
    <div class="flex" v-if="!user">
      <NuxtLink to="courses" class="border-2 px-16 border-black rounded-sm py-3"> Courses</NuxtLink>
      <button class="border-2 px-16 border-black rounded-sm py-3"> About</button>
      <button class="border-2 px-16 border-black rounded-sm py-3"> Pricing</button>
    </div>

    <div class="flex flex-col justify-center items-center" v-else>
      <img :src="user_avatar" alt="user-avatar" class="w-10 h-10 rounded-full" />
      <button class="text-xs" @click="logout"> Logout</button>
    </div>
  </div>
</template>

<style scoped></style>
