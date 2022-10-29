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
  <div class="border border-gray-100 z-10" bg="white/85" pos="fixed left-0 right-0 top-0" backdrop="blur-md">
    <div class="w-[1200px] mx-auto">
      <div h-16 flex justify="between" items-center>
        <NuxtLink to="/">
          <div w-36 text="xl gray-700">
            cwg
          </div>
        </NuxtLink>
        <div relative>
          <input w-96 h-9 border="gray-200 rounded" bg="gray-100" outline="0" px-3 text="gray-600">
          <div class="i-carbon-search right-2 top-2 absolute" text="gray-400" cursor="pointer" />
        </div>
        <div v-if="userInfo?.username">
          <img :src="userInfo?.avatar" class="w-10 rounded-full cursor-pointer">
          <AMenu trigger="hover">
            <ACard>
              <ATypography
                v-for="(item, i) in items" :key="i"
                :title="item.title"
                class="text-sm px-4 py-1 cursor-pointer"
                hover="bg-true-gray-100" @click="onJump(item.name)"
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
