<template>
  <div class="app-warp">
    <!-- left menu -->
    <Sidebar></Sidebar>
    <div class="main-container">
      <!-- top nav -->
      <div class="fixed-header">
        <Navbar />
      </div>
      <!-- conter main -->
      <app-main></app-main>
    </div>
  </div>
</template>
<script setup>
import AppMain from './components/AppMain'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
