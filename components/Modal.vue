<script lang="ts" setup>
const { title } = defineProps<{ title: string; open: boolean }>()
const emit = defineEmits(['close'])
const modalRef = ref(null)
onClickOutside(
  modalRef,
  (event) => {
    emit('close')
  },
)
</script>

<template>
  <Teleport to="body">
    <Transition name="bg">
      <div v-show="open" flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 z-20 bg="#121212/30" backdrop="blur-sm">
        <Transition name="scale">
          <div v-show="open" ref="modalRef" w-lg max-w-full p-4 relative rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg="white dark:warm-gray-900" text="base #121212 dark:gray-300">
            <div>{{ title }}</div>
            <div i-carbon-close cursor-pointer absolute top-2 right-2 text="#121212 dark:white" @click="emit('close')" />
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
