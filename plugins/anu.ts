import { anu } from 'anu-vue'
// import styles
import 'anu-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(anu)
})
