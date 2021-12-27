<template>
  <div class="demo-input-suffix">
    <span class="demo-input-label">登陆</span>
    <el-row :gutter="20">
      <el-input v-model="username" placeholder="请输入用户名">
        <template #prefix>
          <el-icon class="el-input__icon"><Avatar /></el-icon>
        </template>
      </el-input>
    </el-row>

    <el-row :gutter="20">
      <el-input v-model="password" placeholder="请输入密码">
        <template #prefix>
          <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
      </el-input>
    </el-row>
  </div>
</template>

<script setup>
import { Avatar, Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}

.demo-input-suffix {
  margin-bottom: 16px;
}
</style>
