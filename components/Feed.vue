<script lang="ts" setup>
import type { IFeed } from '~~/typings'
const { data, index } = defineProps<{ data: IFeed; index: number }>()
</script>

<template>
  <div flex bg="white dark:#121212" p="5" border="b gray-100 dark:warm-gray-800" cursor="pointer" hover="bg-light-200" @click.stop="go('feed', data?.id)">
    <div w-12>
      <Avatar :user="data?.user" />
    </div>
    <div flex="grow" ml-4>
      <Uesr :data="data" />
      <Subject v-if="data?.subject" :subject="data?.subject" />
      <FeedBar :data="data" :index="index" />
    </div>
  </div>
</template>
