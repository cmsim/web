<script setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})
</script>

<template>
  <NuxtLayout cl>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  font-family: system-ui, -apple-system, BlinkMacSystemFont,
    'SF Pro SC', 'SF Pro Display', 'PingFang SC', 'Microsoft YaHei',
    'Lucida Grande', 'Helvetica Neue', 'Segoe UI', Helvetica, Arial, Verdana, sans-serif;
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
