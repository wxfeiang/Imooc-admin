<!--
 * @Author: wxfeiang
 * @Description: 表单输入组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-05 16:31:31
 * @FilePath: /Imooc-admin/src/components/control/checkbox/index.vue
-->
<template>
  <el-checkbox
    v-if="itemData.checkAll"
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
    class="checkAll"
    >全选</el-checkbox
  >

  <el-checkbox-group
    v-model="currentValue"
    v-bind="itemData"
    @change="inputEnter"
  >
    <template v-for="item in itemData.dicData" :key="item.value">
      <el-checkbox
        :label="item.value"
        :disabled="item.disabled"
        v-bind="itemData.config"
      >
        {{ item.label }}
      </el-checkbox>
    </template>
  </el-checkbox-group>
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
    type: Array,
    default: () => []
  }
})
const currentValue = ref([])
const checkAll = ref(false)
const isIndeterminate = ref(true)

// 监听单个去掉 数组
watch(
  () => [props.modelValue],
  ([modelValue]) => {
    currentValue.value = modelValue
  },
  { deep: true, immediate: true }
)
const inputEnter = (value) => {
  //  判断是否有全选功能
  if (props.itemData.checkAll) {
    const checkedCount = value.length
    const allLength = props.itemData.dicData.map((item) => {
      return item.value
    }).length
    console.log(checkedCount === allLength)
    checkAll.value = checkedCount === allLength
    isIndeterminate.value = checkedCount > 0 && checkedCount < allLength
  }
  emit('update:modelValue', currentValue.value)
}
const handleCheckAllChange = (val) => {
  const all = props.itemData.dicData.map((item) => {
    return item.value
  })
  currentValue.value = val ? all : []
  isIndeterminate.value = false // 全选开关
}
</script>

<style lang="scss" scoped>
.checkAll {
  margin-right: 20px;
}
</style>
