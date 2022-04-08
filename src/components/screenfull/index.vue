<template>
  <div @click="handleFullScreen" class="screen" title="全屏">
    <i
      class="icon iconfont"
      :class="screen ? 'icon-tuichuquanping' : 'icon-quanping'"
      @click="onChengepwdType"
    ></i>
    <!-- <svg-icon :icon="screen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon> -->
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref } from 'vue'

const screen = ref(false)
const handleFullScreen = () => {
  screen.value = !screen.value
  if (screenfull.isEnabled) return screenfull.toggle()
}
</script>
<style>
.screen {
  padding: 0 5px;
  cursor: pointer;
}
</style>
