<script setup>
import 'anu-vue/dist/style.css'

useHead({
  title: 'cwg',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
html, body , #__nuxt{
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    'SF Pro SC', 'SF Pro Display', 'PingFang SC', 'Microsoft YaHei',
    'Lucida Grande', 'Helvetica Neue', 'Segoe UI', Helvetica, Arial, Verdana, sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}
html.dark {
  background-color: #121212;
}
</style>
