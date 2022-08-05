<template>
  <div class="bg_box">
    <h3 class="title">后台管理系统</h3>
    <el-form ref="loginFormRef" :model="loginFrom" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="loginFrom.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginFrom.password"
          placeholder="请输入密码"
          :type="passwordType"
        >
          <template #prefix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
          <template #suffix>
            <i
              class="icon iconfont"
              :class="isActive ? 'icon-icon-test1' : 'icon-icon-test2'"
              @click="onChengepwdType"
            ></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="handlerLogin"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { validatePassword } from './rules.js'
// 表单数据
const loginFrom = ref({
  username: 'superdmin',
  password: '123456'
})
// 验证规则
const rules = ref({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
// 处理密码明文切换
const passwordType = ref('password')
const isActive = ref(false)
const onChengepwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
    isActive.value = true
  } else {
    passwordType.value = 'password'
    isActive.value = false
  }
}
// 登陆事件操作 倒入store
const loading = ref(false)
const store = useStore()
const loginFormRef = ref(null)

const handlerLogin = () => {
  // 表单校验
  // 触发等待
  // 数据处理

  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true

    store
      .dispatch('user/login', loginFrom.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style scoped lang="scss">
.bg_box {
  width: 40%;
  margin: 10% auto 0;
  background-color: #f5f5f5;
  padding: 30px;
}
h3 {
  text-align: center;
  line-height: 40px;
}
.el-button {
  width: 100%;
}
</style>
