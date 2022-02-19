<template>
  <el-menu
    :collapse="!$store.getters.siderbarOpen"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :background-color="$store.getters.cssVar.menuBg"
    class="el-menu-my"
    :default-active="activeMeun"
    :text-color="$store.getters.cssVar.menuText"
    router
  >
    <sideItem v-for="item in routes" :key="item.patn" :route="item"></sideItem>
  </el-menu>
</template>
<script setup>
import sideItem from './sideItem'
// import { Location, Menu as IconMenu } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fiterRoutes, genarateMenu } from '@/utils/route'

const router = useRouter()

const routes = computed(() => {
  const fRoutes = fiterRoutes(router.getRoutes())
  return genarateMenu(fRoutes)
})
//  默认激活
const route = useRoute() // 当前路由

const activeMeun = computed(() => {
  const { path } = route
  return path
})
</script>
<style lang="scss" scoped>
@import '~@/styles/varilables.scss';
.el-menu {
  width: $sideBarWidth;
  border: none;
}
</style>
