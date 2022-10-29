<script lang="ts" setup>
import type { IFeed } from '~~/typings'
const { data } = defineProps<{ data: IFeed }>()
</script>

<template>
  <div flex bg="white" p="5" border="b gray-100 solid" cursor="pointer" hover="bg-light-200" @click.stop="go('feed', data?.id)">
    <div class="w-12">
      <Avatar :user="data?.user" />
    </div>
    <div class="flex-grow ml-4">
      <Uesr :data="data" />
      <Subject v-if="data?.subject" :subject="data?.subject" />
    </div>
  </div>
</template>
