<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-submenu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>一级导航</span>
      </template>

      <el-menu-item index="1-1">item one1</el-menu-item>
      <el-menu-item index="1-2">item one2</el-menu-item>

      <el-menu-item index="1-3">item three3</el-menu-item>

      <el-submenu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one 4</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <el-icon><IconMenu /></el-icon>
        <span>2级导航</span>
      </template>

      <el-menu-item index="2-1">item one1</el-menu-item>
      <el-menu-item index="2-2">item one2</el-menu-item>

      <el-menu-item index="2-3">item three3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script setup>
import { Location, Menu as IconMenu } from '@element-plus/icons-vue'

// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// @open="handleOpen"
//   @close="handleClose"
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.el-menu {
  width: 200px;
}
</style>
