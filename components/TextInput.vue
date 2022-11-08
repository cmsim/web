<script setup lang="ts">
import { toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name')

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
})
</script>

<template>
  <div mb-2>
    <label :for="label">{{ label }}</label>
    <input
      v-show="type !== 'hidden'"
      v-model="inputValue"
      :label="label"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      border="~ solid gray-200 rounded-md"
      w-full
      px-2 h-10 @input="handleChange" @blur="handleBlur"
    >
    <p v-if="errorMessage || meta.valid" class="text-red-500">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>
