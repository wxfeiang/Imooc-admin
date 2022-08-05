<!--
 * @Author: wxfeiang
 * @Description: 表单输入组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-05 14:04:34
 * @FilePath: /Imooc-admin/src/components/control/inputnumber/index.vue
-->
<template>
  <el-input-number
    v-bind="itemData"
    :placeholder="itemData.placeholder"
    v-model="currentValue"
    @change="inputEnter"
  >
  </el-input-number>
</template>
<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  itemData: {
    type: Object,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
const currentValue = ref('')
const select = ref('')
// 监听单个去掉 数组
watch(
  () => [props.modelValue],
  ([modelValue]) => {
    currentValue.value = modelValue
  },
  { deep: true, immediate: true }
)
const inputEnter = (value) => {
  emit('update:modelValue', currentValue.value)
}
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
