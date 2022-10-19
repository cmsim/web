<script setup lang="ts">
const subject = useSubjectStore()
await subject.getSubjectList()
const list = $computed(() => subject.subjectList)
</script>

<template>
  <div>
    <div pos="relative">
      <template v-for="item in list" :key="item.id">
        <NuxtLink :to="`/subject/${item.id}`">
          <ABtn>{{ item.name }}</ABtn>
        </NuxtLink>
      </template>
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
            <div class="w-20 h-20">
              <img class="w-20 h-20" :src="item.pic">
            </div>
            <div class="text">
              {{ item.name }}
            </div>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </div>
  </div>
</template>

<style scoped>
.scroller {
  height: 100%;
}
</style>
