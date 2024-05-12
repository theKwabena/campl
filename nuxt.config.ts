// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-svgo', '@vueuse/nuxt', "@nuxtjs/supabase"],
  svgo: {
    autoImportPath: false
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