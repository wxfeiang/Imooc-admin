<template>
  <el-container
    class="home"
    :class="[$store.getters.siderbarOpen ? 'open' : 'close']"
  >
    <Sidebar :style="{ background: $store.getters.cssVar.menuBg }"></Sidebar>

    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main> <app-main></app-main></el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
</script>
<style lang="scss" scoped>
@import '~@/styles/varilables.scss';
.home {
  height: 100%;

  .el-header {
    height: 60px !important;
  }

  .el-main {
    padding-top: 0;
    overflow: hidden !important;
    background: rgb(238, 235, 235);
  }
}
</style>
