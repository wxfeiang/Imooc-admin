<template>
  <el-container class="home">
    <el-aside width="200px">
      <Sidebar :style="{ backgroundColr: varilables.menuBg }"></Sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main> <app-main></app-main></el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import varilables from '@/styles/varilables.scss'
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
</script>
<style lang="scss" scoped>
.home {
  height: 100%;

  .el-header {
    height: 60px !important;
    background: azure;
  }
  .el-aside {
    overflow: hidden;
    background: #ccc;
  }
  .el-main {
    padding-top: 0;
    overflow: hidden !important;
    background: pink;
  }
}
</style>
