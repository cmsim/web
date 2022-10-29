<script lang="ts" setup>
import type { IFeed } from '~~/typings'
import { FeedType } from '~~/typings/enum'

const { data } = defineProps<{ data: IFeed }>()
</script>

<template>
  <div flex="~ col">
    <div>
      <b text="warm-gray-700" @click.stop="go('user', data.user?.id)">{{ data.user?.nickname }}</b>
      <span mx-1>{{ FeedType[data.type] }}</span>
      <span text="warm-gray-700" @click.stop="go('subject', data.subject?.id)">{{ data.subject.name }}</span>
    </div>
    <div text="gray-500 sm">
      <span>{{ data.time }}</span>
      <span mx-1>·</span>
      <span>web</span>
    </div>
  </div>
</template>
