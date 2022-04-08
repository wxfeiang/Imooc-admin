<template>
  <div id="guide" @click.prevent.stop="handleGuide">
    <i class="icon iconfont icon-xinshouyindao"></i>
  </div>
</template>

<script setup>
import { steps } from '@/layout/components/driver/steps'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { onMounted } from 'vue'

let driver
onMounted(() => {
  driver = new Driver({
    opacity: 0.75,
    animate: false, // 否则图标消失
    padding: 10,
    allowClose: true, // 禁止点击外部关闭
    overlayClickNext: false, // 如果它在覆盖上移动到下一步，请单击
    doneBtnText: '完成', // 完成按钮标题
    closeBtnText: '关闭', // 关闭按钮标题
    stageBackground: '#fff', // 引导对话的背景色
    nextBtnText: '下一步', // 下一步按钮标题
    prevBtnText: '上一步' // 上一步按钮标题
  })
})
const handleGuide = () => {
  driver.defineSteps(steps)
  driver.start()
}
</script>
