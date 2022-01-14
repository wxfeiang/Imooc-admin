<template>
  <div class="nav">
    <div class="right_menu">
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
}
.right_menu {
  margin-left: auto;
}
</style>
