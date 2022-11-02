<script setup lang="ts">
import { ACheckbox } from 'anu-vue'
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
const name = toRef(props, 'name')
const {
  value,
} = useField(name, undefined, {
  initialValue: props.value,
})
</script>

<template>
  <ACheckbox :id="name" v-model="value" color="info">
    {{ label }}
  </ACheckbox>
</template>
