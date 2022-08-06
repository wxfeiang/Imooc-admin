<!--
 * @Author: wxfeiang
 * @Description: 单选组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-06 15:57:10
 * @FilePath: /Imooc-admin/src/components/control/radio/index.vue
-->
<template>
  <el-radio-group v-model="currentValue" v-bind="itemData" @change="inputEnter">
    <template v-for="item in itemData.dicData" :key="item.value">
      <component
        :is="itemData.showButton ? 'el-radio-button' : 'el-radio'"
        :label="item.value"
        :disabled="item.disabled"
        v-bind="itemData.config"
      >
        {{ item.label }}
      </component>

      <!-- <el-radio
        :label="item.value"
        :disabled="item.disabled"
        v-bind="itemData.config"
      >
        {{ item.label }}
      </el-radio> -->
    </template>
  </el-radio-group>
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
    type: [String, Number, Boolean],
    default: ''
  }
})
const currentValue = ref('')

/**
 * @description: 更新值
 * @param {*} value
 * @return {*}
 */
const inputEnter = (value) => {
  emit('update:modelValue', currentValue.value)
}

watch(
  () => [props.modelValue],
  ([modelValue]) => {
    currentValue.value = modelValue
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>
