<script setup lang="ts">
import type { ISubject } from '~~/typings'

const { subject } = defineProps<{ subject: ISubject }>()
</script>

<template>
  <div class="w-20 mt-2" inline-block @click.stop="go('subject', subject?.id)">
    <img class="w-20" :src="subject?.pic">
  </div>
</template>
