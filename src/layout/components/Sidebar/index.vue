<template>
  <el-aside :class="[$store.getters.siderbarOpen ? 'open' : 'close']">
    <div class="logo">
      <el-avatar :size="size" :src="circleUrl"></el-avatar>
      <h1 v-if="$store.getters.siderbarOpen">后台管理系统</h1>
    </div>

    <el-scrollbar>
      <Menu />
    </el-scrollbar>
  </el-aside>
</template>
<script setup>
import Menu from './menu'
import { ref } from 'vue'
const circleUrl = ref('http://47.99.93.97/api/public/upload/1642521427253.jpg')
const size = 50
const color = 'red'
const pd = '20px'
</script>
<style lang="scss" scoped>
@import '~@/styles/varilables.scss';
.logo {
  text-align: center;
  padding: v-bind('pd');
  h1 {
    color: v-bind('color');
    font-size: 20px;
  }
}
.el-aside {
  overflow: hidden;
  width: $sideBarWidth;
  transition: width 0.28s;
}
.open {
  width: $sideBarWidth;
  ::v-deep .el-menu {
    width: $sideBarWidth;
  }
}
.close {
  width: $sideBarClsoeWidth;
  ::v-deep .el-menu {
    width: $sideBarClsoeWidth;
  }
}
</style>
