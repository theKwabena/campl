<script setup lang="ts">
definePageMeta({
  layout : false
})

const supabase = useSupabaseClient();

const user = useSupabaseUser();
const { query } = useRoute()

watchEffect(async ()=>{
  if(user.value){
    await navigateTo(query.redirectTo as string, {replace: true})
  }
})
const login = async () => {
  const redirectTo = `${window.location.origin}/${query.redirectTo}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {redirectTo}
  })

  if (error){
    console.log(error)
  }
}
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
      <button class="bg-black" @click.prevent>
        <span class="block p-1 bg-amber-500 -translate-x-[3px] -translate-y-1 active:translate-x-0 active:translate-y-0">
            Login
        </span>

      </button>
    </form>
    <div class="flex items-center w-80 my-2">
      <div class="flex-1 border-t border-gray-400"></div>
      <span class="px-3 my-2">OR</span>
      <div class="flex-1 border-t border-gray-400"></div>
    </div>

    <div class="">
      <div class="flex justify-between space-x-5">
        <button class="bg-black" >
          <span class="block px-10 py-2 bg-white border-black border-2 -translate-x-[3px] -translate-y-1 active:translate-x-0 active:translate-y-0">
            <svg width="20px" height="20px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Color-" transform="translate(-401.000000, -860.000000)">
                      <g id="Google" transform="translate(401.000000, 860.000000)">
                          <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">
                          </path>
                          <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">
                          </path>
                          <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">
                          </path>
                          <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
                          </path>
                      </g>
                  </g>
              </g>
            </svg>
          </span>
        </button>
        <button class="bg-black" @click="login">
          <span class="block px-10 py-2 bg-white border-black border-2 -translate-x-[3px] -translate-y-1 active:translate-x-0 active:translate-y-0">
            <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#161514" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/></svg>
          </span>
        </button>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>