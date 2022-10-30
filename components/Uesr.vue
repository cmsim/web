<script lang="ts" setup>
import type { IFeed } from '~~/typings'
import { FeedType } from '~~/typings/enum'

const { data } = defineProps<{ data: IFeed }>()

const items = [
  { title: '剧集', name: 'subject' },
  { title: '评论', name: 'comment' },
  { title: '动态', name: 'feed' },
  { title: '退出', name: 'logout' },
]

const onJump = async (name: string) => {
  console.log(name, 'xxxx')
}
</script>

<template>
  <div flex justify="between">
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
    <div w-9 h-9 flex justify="center" items-center hover="bg-#1d9bf0/10 text-#1d9bf0" rounded="full" @click.stop>
      <div i-carbon-overflow-menu-horizontal />
      <AMenu placement="bottom-end">
        <ACard>
          <ATypography
            v-for="(item, i) in items" :key="i"
            :title="item.title"
            text-sm px-4 py-1 cursor="pointer"
            hover="bg-gray-100 dark:bg-warm-gray-700" @click="onJump(item.name)"
          />
        </ACard>
      </AMenu>
    </div>
  </div>
</template>
