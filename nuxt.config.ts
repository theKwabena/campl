// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', "@nuxtjs/supabase", "@nuxt/image"],
  svgo: {
    autoImportPath: false
  },
  image: {},
  supabase: {
    redirect: false,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-def font-soehne',
      },
    },
  },
})