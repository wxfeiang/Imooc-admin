<template>
  <div class="nav">
    <div class="left">
      <Hamburger />
      <Breadcrumb />
    </div>
    <div class="right_menu">
      <!-- 全屏按钮 -->
      <Screenfull />
      <div class="left">您好,{{ $store.getters.userInfo.title }}</div>
      <el-dropdown trigger="click">
        <div class="avatar_warp">
          <el-avatar
            :size="50"
            :src="$store.getters.userInfo.avatar"
          ></el-avatar>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/hamburger'
import Screenfull from '@/components/screenfull'
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>
<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
}
.right_menu {
  display: flex;
  align-items: center;
  margin-left: auto;
  .left {
    margin-right: 30px;
  }
}
</style>
