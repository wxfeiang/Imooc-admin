<!--
 * @Author: wxfeiang
 * @Description: 单选组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-07 19:39:15
 * @FilePath: /Imooc-admin/src/components/control/radio/index.vue
-->
<template>
  <el-radio-group v-model="currentValue" v-bind="itemData" @change="inputEnter">
    <template v-for="item in option" :key="item.value">
      <component
        :is="itemData.showButton ? 'el-radio-button' : 'el-radio'"
        :label="item[defaultProps.value]"
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
import { initDefaultProps, initOptions } from '../../Form/tools'

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
const option = ref([])

const defaultProps = ref({
  label: 'label',
  value: 'value'
})
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
  (newValue, valueOld) => {
    currentValue.value = newValue[0]

    option.value = initOptions(props.itemData.option)
    defaultProps.value = initDefaultProps(props.itemData.props)
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>
