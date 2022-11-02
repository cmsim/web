<script setup lang="ts">
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import md5 from 'md5'

const props = defineProps<{ getUser: () => void }>()
const emit = defineEmits(['close', 'reg', 'getUser'])
const onSubmit = async (values: any) => {
  const res = await login({ ...values, password: md5(values.password!) })
  localStorage.token = res.data
  await props.getUser?.()
  await emit('close')
}

function onInvalidSubmit() {
  const submitBtn = document.querySelector('.submit-btn') as HTMLDivElement
  submitBtn.classList.add('invalid')
  setTimeout(() => {
    submitBtn.classList.remove('invalid')
  }, 1000)
}

// Using yup to generate a validation schema
// https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
const schema = Yup.object().shape({
  username: Yup.string().required('请输入用户名'),
  password: Yup.string().min(6).required('请输入密码'),
})
</script>

<template>
  <div>
    <Form
      :validation-schema="schema"
      class="p-4 pt-0"
      @submit="onSubmit"
      @invalid-submit="onInvalidSubmit"
    >
      <TextInput
        name="username"
        type="text"
        label="用户名"
        placeholder="请输入用户名"
      />
      <TextInput
        name="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
      <div class="flex justify-between">
        <a @click="emit('reg')">注册</a>
        <div><Checkbox label="记住登录" name="login" /></div>
      </div>
      <button class="submit-btn cursor-pointer" type="submit">
        登录
      </button>
    </Form>
  </div>
</template>

<style>
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 20px;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn:hover {
  opacity: .8;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}
</style>
