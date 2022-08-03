<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-03 11:08:13
 * @FilePath: /Imooc-admin/src/components/Form/input.vue
-->
<template>
  <el-input
    v-bind="itemData"
    :placeholder="itemData.label"
    v-model="currentValue"
    @input="inputEnter"
  ></el-input>
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
watch(
  () => props.modelValue,
  (val) => {
    currentValue.value = val
  },
  { deep: true, immediate: true }
)
const inputEnter = () => {
  emit('update:modelValue', currentValue.value)
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
