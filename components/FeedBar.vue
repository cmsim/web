<script lang="ts" setup>
import type { IFeed } from '~~/typings'
const { data } = defineProps<{ data: IFeed }>()
const onAction = () => {
  console.log(1111)
}
</script>

<template>
  <div flex justify="between" mt-2 relative class="-left-2">
    <div flex items-center class="group" justify="center" @click.stop="onAction">
      <div flex="~" justify="center" items-center w-9 h-9 rounded="full" group-hover="bg-#1d9bf0/10 text-#1d9bf0">
        <i i-carbon-chat w-5 h-5 />
      </div>
      <div group-hover="text-#1d9bf0" ml-1 text="sm">
        {{ data.comment_count || '' }}
      </div>
    </div>
    <div flex items-center class="group" @click.stop="onAction">
      <div flex="~" justify="center" items-center w-9 h-9 rounded="full" group-hover="bg-#00ba7c/10 text-#00ba7c">
        <i i-carbon-arrows-horizontal w-5 h-5 />
      </div>
      <div group-hover="text-#00ba7c" ml-1 text="sm">
        {{ data.forward_count || '' }}
      </div>
    </div>
    <div flex items-center class="group" @click.stop="onAction">
      <div flex="~" justify="center" items-center w-9 h-9 rounded="full" group-hover="bg-#f91880/10 text-#f91880">
        <i i-carbon-favorite w-5 h-5 />
      </div>
      <div group-hover="text-#f91880" ml-1 text="sm">
        {{ data.like_count || '' }}
      </div>
    </div>
    <div flex items-center class="group" @click.stop="onAction">
      <div flex="~" justify="center" items-center w-9 h-9 rounded="full" group-hover="bg-#1d9bf0/10 text-#1d9bf0">
        <i i-carbon-export w-5 h-5 />
      </div>
    </div>
  </div>
</template>
