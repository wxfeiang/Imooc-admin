<template>
  <div class="bg_box">
    <h3 class="title">后台管理系统</h3>
    <el-form
      ref="ruleFormRef"
      :model="loginFrom"
      :rules="rules"
      label-width="120px"
    >
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
            <el-icon class="el-input__icon" @click="onChengepwdType"
              ><Search
            /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { Avatar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { validatePassword } from './rules.js'
const loginFrom = ref({
  username: 'admin',
  password: '123456'
})
// loginRules
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
const onChengepwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
</script>

<style>
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
