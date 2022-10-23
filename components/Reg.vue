<script setup lang="ts">
import md5 from 'md5'
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import type { IUser } from '~~/typings'
const props = defineProps({
  getUser: {
    type: Function,
    default: () => {},
  },
})
const emit = defineEmits(['close', 'login', 'getUser'])
const code = ref<{ token: string; image: string }>()
const onSubmit = async (values: IUser) => {
  await reg({ ...values, token: code.value?.token })
  await props.getUser()
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
  email: Yup.string().email().required('请输入邮箱'),
  password: Yup.string().min(6).required('请输入密码'),
  confirm_password: Yup.string()
    .required('请再次输入密码')
    .oneOf([Yup.ref('password')], '两次输入密码不相同'),
  captcha: Yup.string().required('请输入验证码'),
})

const getCode = async () => {
  const { data } = await captcha()
  code.value = data
}

watchEffect(() => {
  getCode()
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
        name="email"
        type="email"
        label="邮箱"
        placeholder="请输入邮箱"
      />
      <TextInput
        name="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
      <TextInput
        name="confirm_password"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
      />
      <div class="flex mt-4 items-end">
        <TextInput
          name="captcha"
          type="text"
          label="验证码"
          placeholder="请输入验证码"
        />
        <div pb="1" pl="4" @click="getCode" v-html="code?.image" />
      </div>
      <button class="submit-btn" type="submit">
        注册
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
  font-size: 16px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  transition: transform 0.3s ease-in-out;
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
