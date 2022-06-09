<template>
  <el-card class="box-card appMin">
    <router-view />
  </el-card>
</template>
<script setup></script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.appMin {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
}
</style>
