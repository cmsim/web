<script setup lang="ts">
import type { IUser } from '~~/typings'

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
</script>

<template>
  <div border="b gray-100 dark:warm-gray-800" z-10 bg="white/85 dark:#121212/85" pos="fixed left-0 right-0 top-0" backdrop="blur-md">
    <div w-1200px mx="auto">
      <div h-16 flex justify="between" items-center>
        <NuxtLink to="/">
          <div w-36 text="xl gray-700" dark="text-white">
            cwg
          </div>
        </NuxtLink>
        <div relative>
          <input w-96 h-9 border="gray-200 rounded dark:warm-gray-900" bg="gray-100 dark:warm-gray-800" outline="0" px-3 text="gray-600 dark:gray-300">
          <div class="i-carbon-search" pos="absolute right-2 top-2" text="gray-400 dark:warm-gray-600" cursor="pointer" />
        </div>
        <div v-if="userInfo?.username">
          <NuxtImg
            v-if="userInfo?.avatar"
            width="40"
            format="webp"
            :src="userInfo?.avatar"
            :alt="userInfo?.nickname"
            w-10 h-10 cursor="pointer" rounded="full" object-cover
          />
          <AMenu trigger="hover">
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
