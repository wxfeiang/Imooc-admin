<template>
  <el-menu
    :unique-opened="true"
    bacground-color="#545c64"
    active-text-color="#ffd04b"
    text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<script setup></script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
