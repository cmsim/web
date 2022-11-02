<script lang="ts" setup>
import type { IFeed } from '~~/typings'
import { FeedType } from '~~/typings/enum'
const { data } = defineProps<{ data: IFeed }>()

const items = [
  { label: '剧集', key: 'subject' },
  { label: '评论', key: 'comment' },
  { label: '动态', key: 'feed' },
  { label: '退出', key: 'logout' },
]

const onOK = async (item: typeof items[0]) => {
  console.log(item)
}
</script>

<template>
  <div flex justify="between">
    <div flex="~ col">
      <div>
        <b text="warm-gray-700" @click.stop="go('user', data.user?.id)">{{ data.user?.nickname }}</b>
        <span mx-1>{{ FeedType[data.type] }}</span>
        <span text="warm-gray-700" @click.stop="go('subject', data?.subject?.id)">{{ data?.subject?.name }}</span>
      </div>
      <div text="gray-500 sm">
        <span>{{ data.time }}</span>
        <span mx-1>·</span>
        <span>web</span>
      </div>
    </div>
    <Dropdown :menu="items" :on-ok="onOK">
      <div w-9 h-9 flex justify="center" items-center hover="bg-#1d9bf0/10 text-#1d9bf0" rounded="full">
        <div i-carbon-overflow-menu-horizontal />
      </div>
    </Dropdown>
  </div>
</template>
