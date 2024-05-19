/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'def' : '#f6edf1',
        'home': '#9ce1fb'
      }
    },
    fontFamily : {
      soehne : ["Soehne"]
    }
  },
  plugins: [],
}

