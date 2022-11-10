export default defineNuxtConfig({
  css: [
    '@unocss/reset/tailwind.css',
  ],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge',
    '@kevinmarrec/nuxt-pwa',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  colorMode: {
    classSuffix: '',
  },
  typescript: {
    shim: false,
  },
  pwa: {
    workbox: {
      enabled: process.env.NODE_ENV === 'production',
    },
    meta: {
      mobileAppIOS: true,
      name: 'cwg',
      author: 'Behon Baker',
      theme_color: '#4f46e5',
      description: 'cwg',
    },
    manifest: {
      name: 'cwg',
      short_name: 'cwg',
      theme_color: '#4f46e5',
      description: 'cwg',
    },
  },
})
