<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <sideItem v-for="item in routes" :key="item.patn" :route="item"></sideItem>
  </el-menu>
</template>
<script setup>
import sideItem from './sideItem'
// import { Location, Menu as IconMenu } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { fiterRoutes, genarateMenu } from '@/utils/route'

const router = useRouter()

const routes = computed(() => {
  const fRoutes = fiterRoutes(router.getRoutes())
  return genarateMenu(fRoutes)
})
console.log(routes.value)
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.el-menu {
  width: 200px;
}
</style>
