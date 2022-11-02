<script setup lang="ts">
import type { OnClickOutsideHandler } from '@vueuse/core'
import { ACard, ADialog, AMenu, ATypography } from 'anu-vue'
import type { IUser } from '~~/typings'
const refReference = ref()
const refFloating = ref()

const isLogin = ref(false)
const isReg = ref(false)
const userInfo = ref<IUser>()
const getUser = async () => {
  const res = await getUserInfo()
  userInfo.value = res.data
}

watchEffect(() => {
  getUser()
})

const items = [
  { title: '剧集', name: 'subject' },
  { title: '评论', name: 'comment' },
  { title: '动态', name: 'feed' },
  { title: '退出', name: 'logout' },
]

const onJump = async (name: string) => {
  if (name === 'logout') {
    const res = await logout()
    if (res.data)
      userInfo.value = undefined
  }
}

const dropdown = ref(false)
useEventListener(refReference, 'mouseenter', () => { dropdown.value = true })
// useEventListener(refReference, 'mouseleave', () => { dropdown.value = false })
useEventListener(refFloating, 'mouseenter', () => { dropdown.value = true })
useEventListener(refFloating, 'mouseleave', () => { dropdown.value = false })
const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  dropdown.value = false
}
</script>

<template>
  <div border="b gray-100 dark:warm-gray-800" z-10 bg="white/85 dark:#121212/85" pos="fixed left-0 right-0 top-0" backdrop="blur-md">
    <div w-1200px mx="auto">
      <div h-16 flex justify="between" items-center>
        <div flex justify="center" items-center>
          <NuxtLink to="/">
            <div w-12 text="xl gray-700" dark="text-white">
              cwg
            </div>
          </NuxtLink>
          <DarkToggle />
        </div>
        <div relative>
          <input w-96 h-9 border="gray-200 rounded dark:warm-gray-900" bg="gray-100 dark:warm-gray-900" outline="0" px-3 text="gray-600 dark:gray-300">
          <div i-carbon-search pos="absolute right-2 top-2" text="gray-400 dark:warm-gray-600" cursor="pointer" />
        </div>
        <div v-if="userInfo?.username" relative>
          <NuxtImg
            v-if="userInfo?.avatar"
            ref="refReference"
            width="40"
            format="webp"
            :src="userInfo?.avatar"
            :alt="userInfo?.nickname" w-10 h-10 cursor="pointer" rounded="full"
            object-cover
          />
          <Transition name="slide-up">
            <div v-if="dropdown" ref="refFloating" v-on-click-outside.bubble="dropdownHandler" max-h-60 w-30 overflow-y-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg="white dark:warm-gray-900" text="base #121212 dark:gray-300" absolute right-0 z-10>
              <div v-for="item in items" :key="item.name" flex justify-between cursor-pointer select-none py-2 px-4 hover:bg="gray-100 dark:warm-gray-700" hover:text="dark:gray-300" @click.stop="onJump(item.name)">
                <div block truncate>
                  {{ item.title }}
                </div>
              </div>
            </div>
          </Transition>
        </div>
        <div v-else @click="isLogin = true">
          登录
        </div>
      </div>
    </div>
    <ADialog
      v-if="isLogin"
      v-model="isLogin"
      title="登录"
    >
      <Login :get-user="getUser" @close="isLogin = false" @reg="{ isLogin = false; isReg = true }" />
    </ADialog>

    <ADialog
      v-if="isReg"
      v-model="isReg"
      title="注册"
    >
      <Reg :get-user="getUser" @close="isReg = false" @login="isLogin = true; isReg = false" />
    </ADialog>
  </div>
</template>
