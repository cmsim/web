<script setup lang="ts">
const subject = useSubjectStore()
await subject.getSubjectList()
const list = $computed(() => subject.subjectList)
</script>

<template>
  <div>
    <HomeLayout>
      <div pos="relative">
        <DynamicScroller
          :items="list"
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
              <NuxtLink :to="`/subject/${item.id}`">
                <div class="w-20 h-20">
                  <img class="w-20 h-20" :src="item.pic">
                </div>
                <div class="text">
                  {{ item.name }}
                </div>
              </NuxtLink>
            </DynamicScrollerItem>
          </template>
        </DynamicScroller>
      </div>
    </HomeLayout>
  </div>
</template>

<style scoped>
.scroller {
  height: 100%;
}
</style>
