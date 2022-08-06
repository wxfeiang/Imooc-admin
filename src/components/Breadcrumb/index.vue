<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-02-20 16:38:10
 * @LastEditTime: 2022-08-06 10:28:19
 * @FilePath: /Imooc-admin/src/components/Breadcrumb/index.vue
-->
<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项目 -->

        <span v-if="index === breadcrumbData.length - 1" class="noredict">
          {{ item.meta.title }}
        </span>
        <!-- 可点击项目 -->
        <span v-else @click="onLink(item)" class="redict">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch } from 'vue' //  监听

import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

// 生成数组
const breadcrumbData = ref([])
const gerelBreadcrumb = () => {
  //  当前路由表  route.matched
  // meat   &&  title

  breadcrumbData.value = route.matched.filter((item) => {
    return item.meta && item.meta.title
  })
  //
}

//  监听路由变化
const route = useRoute()
watch(
  route,
  () => {
    gerelBreadcrumb()
  },
  {
    immediate: true
  }
)
// 用于替换主题色
const store = useStore()
const linkHover = ref(store.getters.cssVar.menuBg)

const router = useRouter()
const onLink = (item) => {
  router.push(item.path)
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
@import '~@/styles/transition.scss';
.redict {
  color: #666;
  font-weight: 600;
  cursor: pointer;
}

.redict:hover {
  color: v-bind(linkHover);
}
.noredict {
  color: #97a8be;
  cursor: pointer;
}
</style>
