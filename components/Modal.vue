<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
const { title, modelValue, cls } = defineProps<{ title: string; modelValue: boolean; cls?: string }>()
const emit = defineEmits(['update:modelValue'])
const modalRef = ref(null)
const closeModal = () => {
  emit('update:modelValue', false)
}
const openModal = () => {
  emit('update:modelValue', true)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="bg">
      <div v-show="modelValue" flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 z-20 bg="#121212/30" backdrop="blur-sm" :class="cls" @click.stop="closeModal">
        <Transition name="scale">
          <div v-show="modelValue" ref="modalRef" w-lg max-w-full p-4 relative rounded-md shadow-lg ring-1 ring-black ring-opacity-5 bg="white dark:warm-gray-900" text="base #121212 dark:gray-300" @click.stop="openModal">
            <div mb-4>
              {{ title }}
            </div>
            <div
              i-carbon-close cursor-pointer absolute top-4 right-4 text="#121212 lg dark:white" @click.stop="emit('update:modelValue', false)"
            />
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
