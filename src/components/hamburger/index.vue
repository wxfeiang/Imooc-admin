<template>
  <div class="hamburger-container" @click="toggleClick">
    <i class="icon iconfont" :class="icon" id="hamburger"> </i>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const toggleClick = () => {
  store.commit('app/triggerSiderOpened')
}

const store = useStore()
const icon = computed(() => {
  return store.getters.siderbarOpen ? 'icon-zhedie1' : 'icon-zhedie2'
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.hamburger-container {
  padding: 0px;
}
.icon:hover {
  color: #1890ff;
  cursor: pointer;
}
</style>
