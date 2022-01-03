<template>
  <div class="bg_box">
    <h3 class="title">后台管理系统</h3>
    <el-from
      label-width="120px"
      :model="loginFrom"
      :rules="loginRules"
      ref="loginFrom"
    >
      <el-form-item prop="username">
        <el-input v-model="loginFrom.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginFrom.password" placeholder="请输入密码">
          <template #prefix>
            <el-icon class="el-input__icon"><Search /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登陆</el-button>
      </el-form-item>
    </el-from>
  </div>
</template>

<script setup>
import { Avatar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { validatePassword } from './rules'
//  登陆
const loginFrom = ref({
  username: '22',
  password: '222'
})
// loginRules
const loginRules = ref({
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'bulr'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      validator: validatePassword()
    }
  ]
})
</script>

<style>
.bg_box {
  width: 40%;
  margin: 10% auto 0;
  background-color: #f5f5f5;
  padding: 30px;
}
.el-button {
  width: 100%;
}
</style>
