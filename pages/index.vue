<script setup lang="ts">
const { $Toast } = useNuxtApp()
const feed = useFeedStore()
await feed.list()
const feedList = $computed(() => feed.feedList)
$Toast()?.show?.('Hey! I\'m here', { position: 'top', type: 'success', duration: 4000 })
</script>

<template>
  <div>
    <HomeLayout>
      <div pos="relative">
        <Chat />
        <DynamicScroller
          :items="feedList"
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
                item.name,
              ]"
              :data-index="index"
            >
              <Feed :data="item" />
            </DynamicScrollerItem>
          </template>
        </DynamicScroller>
      </div>
    </HomeLayout>
  </div>
</template>

<style>
.scroller {
  height: 100%;
}
</style>
