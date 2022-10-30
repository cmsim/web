<script setup lang="ts">
const menu = [
  { name: '最新', icon: 'i-carbon-update-now' },
  { name: '热门', icon: 'i-carbon-fire' },
  { name: '关注', icon: 'i-carbon-user-favorite' },
  { name: '话题', icon: 'i-carbon-hashtag' },
]
</script>

<template>
  <div flex="~" w-1200px pt-16 mx="auto">
    <div w-48 border="r gray-100 dark:warm-gray-800">
      <nav p-2 w-48 border="r gray-100 dark:warm-gray-800" pos="fixed">
        <div v-for="item in menu" :key="item.name" px-4 h-10 flex items-center rounded="sm" cursor="pointer" hover="bg-blue-100 text-blue-700 dark:bg-warm-gray-900 dark:text-white">
          <i :class="item.icon" inline-flex mr-2 />{{ item.name }}
        </div>
        <ul px-4 mt-1>
          <li v-for="item in Array.from({ length: 10 }).map((_, index) => { return index })" :key="item" mb-2 flex="~" items-center>
            <i i-carbon-dot-mark inline-flex mr-1 w-3 h-3 text="blue-500" /><a>你相信光吗？{{ item }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div flex-grow>
      <slot />
    </div>
    <div w-70 border="l gray-100 dark:warm-gray-800">
      <div pos="fixed" w-70>
        111
      </div>
    </div>
  </div>
</template>

