<script lang="ts" setup>
import type { OnClickOutsideHandler } from '@vueuse/core'
import { AMenu } from 'anu-vue'
const msg = ref('')
const textareaRef = ref(null)
const people = [{ name: '公开' }, { name: '仅粉丝' }, { name: '仅自己' }]
const bar = [{ icon: 'i-carbon-face-satisfied', disabled: false }, { icon: 'i-carbon-image', disabled: false }, { icon: 'i-carbon-link', disabled: false }, { icon: 'i-carbon-hashtag', disabled: true }, { icon: 'i-carbon-at', disabled: true }]
const cur = ref(people[0].name)
// 参考vant组件库中的field组件
const adjustTextareaSize = () => {
  const textarea = textareaRef.value as unknown as HTMLTextAreaElement
  textarea.style.height = 'auto'
  const height = textarea.scrollHeight
  if (height) { // 改变textarea高度达到自适应
    textarea.style.height = `${height}px`
  }
}

onMounted(() => {
  nextTick(adjustTextareaSize)
})

watch(() => msg.value, () => {
  nextTick(adjustTextareaSize)
})

const dropdown = ref(false)
const dropdownHandler: OnClickOutsideHandler = (event) => {
  console.log(event)
  dropdown.value = false
}
</script>

<template>
  <div class="flex px-4 mt-4" border="b gray-100 dark:warm-gray-800">
    <div class="flex basis-12 mr-3">
      <div class="w-12 h-12 rounded-full overflow-hidden">
        <img src="https://tva1.sinaimg.cn/large/006bnWk0gy1gzd2ej5yzyj301c01cgld.jpg">
      </div>
    </div>
    <div class="flex-1 relative">
      <textarea ref="textareaRef" v-model="msg" w-full p-3 leading-6 whitespace-pre-wrap break-words outline-none select-text text-base break-all bg="white dark:#121212" resize="none" placeholder="有什么新鲜事？" class="placeholder-.light:text-#536471" />
      <div flex justify-between mt-3 mb-3 pt-3 border="t gray-100 dark:warm-gray-800">
        <div class="flex text-#1d9bf0 h-9 items-center relative">
          <div v-for="item in bar" :key="item.icon" flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative hover:bg="#1d9bf0/10" :class="{ 'pointer-events-none': item.disabled }">
            <div w-5 h-5 :class="item.icon" />
          </div>
        </div>
        <div flex relative>
          <div flex items-center mr-2 text="#536471">
            {{ msg && msg.length }}
          </div>
          <div relative>
            <div flex items-center mr-2 px-3 py-2 text-sm font-bold rounded-full cursor-pointer text="#1d9bf0" hover:bg="#1d9bf0/10" @click.stop="dropdown = !dropdown">
              {{ cur }}
              <div i-carbon-chevron-sort w-4 h-4 ml-2 />
            </div>
            <Transition name="slide-up">
              <div v-if="dropdown" v-on-click-outside.bubble="dropdownHandler" max-h-60 w-30 overflow-y-auto rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg="white dark:warm-gray-900" text="base #121212 dark:gray-300" absolute right-0 z-10>
                <div v-for="item in people" :key="item.name" flex justify-between cursor-pointer select-none py-2 px-4 hover:bg="gray-100 dark:warm-gray-700" hover:text="dark:gray-300" :class="{ 'bg-amber-100 text-amber-900': cur === item.name }">
                  <div block truncate :class="{ 'font-medium': cur === item.name }">
                    {{ item.name }}
                  </div>
                  <div v-if="cur === item.name" i-carbon-checkmark h-5 w-5 />
                </div>
              </div>
            </Transition>
          </div>
          <button
            flex bg="#1d9bf0" text-sm text-white h-9 px-4 justify-center items-center rounded-full cursor-pointer
            :class="msg ? 'hover:bg-#1A8CD8 active:bg-#177CC0' : 'opacity-50 cursor-auto'"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
