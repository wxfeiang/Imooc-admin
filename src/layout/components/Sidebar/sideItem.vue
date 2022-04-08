<template>
  <el-submenu :index="route.path" v-if="route.children.length > 0">
    <template #title>
      <el-icon>
        <i class="icon iconfont" :class="route.meta.icon"></i>
      </el-icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <sideItem
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sideItem>
  </el-submenu>
  <el-menu-item :index="route.path" v-else>
    <el-icon>
      <i class="icon iconfont" :class="route.meta.icon"></i>
    </el-icon>
    <span>{{ route.meta.title }}</span>
  </el-menu-item>
</template>
<script setup>
// import { Location } from '@element-plus/icons-vue'
import { defineProps } from 'vue'
import sideItem from './sideItem'

defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.el-icon {
  margin-right: 10px;
}
</style>
