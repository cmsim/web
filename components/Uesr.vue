<script lang="ts" setup>
import type { OnClickOutsideHandler } from '@vueuse/core'
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

const dropdown = ref(false)
const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  dropdown.value = false
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
    <div relative>
      <div w-9 h-9 flex justify="center" items-center hover="bg-#1d9bf0/10 text-#1d9bf0" rounded="full" @click.stop="dropdown = !dropdown">
        <div i-carbon-overflow-menu-horizontal />
      </div>
      <Transition name="slide-up">
        <div v-if="dropdown" v-on-click-outside.bubble="dropdownHandler" max-h-60 w-30 overflow-y-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg="white dark:warm-gray-900" text="base #121212 dark:gray-300" absolute right-0 z-10>
          <div v-for="item in items" :key="item.name" flex justify-between cursor-pointer select-none py-2 px-4 hover:bg="gray-100 dark:warm-gray-700" hover:text="dark:gray-300">
            <div block truncate>
              {{ item.title }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
