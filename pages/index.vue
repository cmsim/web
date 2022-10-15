<script setup lang="ts">
const item = Array.from(new Array(1000), (_, k) => ({ active: true, id: k, message: `message${k}`, avatar: 'https://image-c.weimobwmc.com/ol-6LEtw/f816b38f82874f6c8039146c4457e2a5.png' }))
const items = ref(item)
</script>

<template>
  <div pos="relative">
    <DynamicScroller
      :items="items"
      :buffer="500"
      :min-item-size="50"
      :prerender="20"
      :page-mode="true"
    >
      <template #default="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[
            item.message,
          ]"
          :data-index="index"
        >
          <div class="w-20 h-20">
            <img class="w-20 h-20" :src="item.avatar">
          </div>
          <div class="text">
            {{ item.message }}
          </div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<style scoped>
.scroller {
  height: 100%;
}
</style>
