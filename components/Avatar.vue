<script lang="ts" setup>
import type { IUser } from '~~/typings'

const { user } = defineProps<{ user?: IUser }>()
</script>

<template>
  <div class="w-12 h-12 rounded-full">
    <img :src="user?.avatar" class="w-12 h-12 rounded-full" :alt="user?.nickname">
  </div>
</template>
