<!--
 * @Author: wxfeiang
 * @Description: 多选框组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-07 19:40:11
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
    <template v-for="item in option" :key="item.value">
      <component
        :is="itemData.showButton ? 'el-checkbox-button' : 'el-checkbox'"
        :label="item[defaultProps.value]"
        :disabled="item.disabled"
        v-bind="itemData.config"
      >
        {{ item[defaultProps.label] }}
      </component>
    </template>
  </el-checkbox-group>
</template>
<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'
import { initDefaultProps, initOptions } from '../../Form/tools'
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

const option = ref([])

const defaultProps = ref({
  label: 'label',
  value: 'value'
})

/**
 * @description: 是否有全选
 * @param {*} value
 * @return {*}
 */
const testCheckAll = (value) => {
  //  判断是否有全选功能
  if (props.itemData.checkAll) {
    const checkedCount = value.length
    const allLength = props.itemData.option.map((item) => {
      return item.value
    }).length
    checkAll.value = checkedCount === allLength
    isIndeterminate.value = checkedCount > 0 && checkedCount < allLength
  }
}

/**
 * @description: 更新值
 * @param {*} value
 * @return {*}
 */
const inputEnter = (value) => {
  testCheckAll(value)
  emit('update:modelValue', currentValue.value)
}

/**
 * @description: 全选
 * @param {*} val
 * @return {*}
 */
const handleCheckAllChange = (val) => {
  const all = props.itemData.option.map((item) => {
    return item.value
  })
  currentValue.value = val ? all : []
  isIndeterminate.value = false // 全选开关
}

// 监听单个去掉 数组  // NOTE: 放到后面 因为没有获取到函数执行
watch(
  () => [props.modelValue, props.itemData],
  (newValue, valueOld) => {
    currentValue.value = newValue[0]
    option.value = initOptions(props.itemData.option)
    defaultProps.value = initDefaultProps(props.itemData.props)
    // 有全选的时候
    if (props.itemData.checkAll) {
      testCheckAll(currentValue.value)
    }
  },
  { deep: true, immediate: true }
)

/** label和value初始化 */
</script>

<style lang="scss" scoped>
.checkAll {
  margin-right: 20px;
}
</style>
