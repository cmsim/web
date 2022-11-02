export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
  },
  plugins: [
    { src: '~/plugins/virtual' },
    { src: '~/plugins/getAuth', ssr: false },
  ],
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
  },
})
