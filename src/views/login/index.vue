<template>
  <div class="bg_box">
    <h3 class="title">后台管理系统</h3>
    <el-from label-width="120px" :model="loginFrom" ref="loginFrom">
      <el-form-item>
        <el-input v-model="loginFrom.username" placeholder="请输入用户名">
          <template #prefix>
            <el-icon class="el-input__icon"><Avatar /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
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
//  TODO
const loginFrom = ref({
  username: '',
  password: ''
})

// const username = ref('')
// const password = ref('')
</script>

<style>
.bg_box {
  background-color: #f5f5f5;
}
</style>
