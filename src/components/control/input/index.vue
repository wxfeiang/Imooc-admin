<!--
 * @Author: wxfeiang
 * @Description: 表单输入组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-05 11:09:56
 * @FilePath: /Imooc-admin/src/components/control/input/index.vue
-->
<template>
  <template v-if="itemData.inType === 'password'">
    <el-input
      v-bind="itemData"
      :placeholder="itemData.placeholder"
      v-model="currentValue"
      @input="inputEnter"
      :type="itemData.type"
    >
    </el-input>
  </template>
  <template v-if="itemData.inType === 'textarea'">
    <el-input
      v-bind="itemData"
      :placeholder="itemData.placeholder"
      v-model="currentValue"
      @input="inputEnter"
      :type="itemData.type"
    >
    </el-input>
  </template>
  <template v-else>
    <el-input
      v-bind="itemData"
      :placeholder="itemData.placeholder"
      v-model="currentValue"
      @input="inputEnter"
    >
      <!-- 插入的前后 -->
      <template #append v-if="itemData.append">
        <template v-if="itemData.appendButton">
          <el-button :icon="itemData.appendButton" @click="appendClick" />
        </template>
        <template v-if="itemData.selectOption">
          <el-select
            v-model="select"
            style="width: 100px"
            @change="handlerSelect"
          >
            <el-option
              v-for="item in itemData.selectOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </template>
        <template v-if="itemData.appendText">
          {{ itemData.appendText }}
        </template>
      </template>

      <!-- 小图标的前后 -->
      <template #prefix v-if="itemData.prefix">
        <el-icon>
          <component :is="itemData.prefix"></component>
        </el-icon>
      </template>
      <template #suffix v-if="itemData.suffix">
        <el-icon>
          <component :is="itemData.suffix"></component>
        </el-icon>
      </template>
    </el-input>
  </template>
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

const inputEnter = () => {
  emit('update:modelValue', currentValue.value)
}
const appendClick = () => {
  console.log('appendClick 需要向上出发传递。。。。。')
}
const handlerSelect = () => {
  console.log(select.value)
}
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>