<!--
 * @Author: wxfeiang
 * @Description: 表单输入组件
 * @Date: 2022-07-19 14:18:00
 * @LastEditTime: 2022-08-07 19:26:53
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
      @click="testCallback(itemData.click) ? callbackItem(itemData) : ''"
    >
      <!-- 插入的后缀 -->
      <template #append v-if="itemData.append">
        <template v-if="itemData.appendButton">
          <el-button
            :icon="itemData.appendButton"
            @click="
              testCallback(itemData.appendCallback)
                ? callbackItem(itemData)
                : ''
            "
          />
        </template>
        <template v-if="itemData.appendOption">
          <el-select
            v-model="appendVal"
            :style="`width: ${itemData.appendWidth || 60}px`"
            @change="appendSelect(itemData)"
          >
            <el-option
              v-for="item in appendOption"
              :key="item[defaultPros.label]"
              :label="item[defaultPros.label]"
              :value="item[defaultPros.value]"
            >
            </el-option>
          </el-select>
        </template>
        <template v-if="itemData.appendText">
          {{ itemData.appendText }}
        </template>
      </template>
      <!-- 插入的前缀 -->
      <template #prepend v-if="itemData.prepend">
        <template v-if="itemData.prependButton">
          <el-button
            :icon="itemData.appendButton"
            @click="
              testCallback(itemData.prependCallback)
                ? callbackItem(itemData)
                : ''
            "
          />
        </template>
        <template v-if="itemData.prependOption">
          <el-select
            v-model="prependVal"
            :style="`width: ${itemData.prependWidth || 60}px`"
            @change="prependSelect(itemData)"
          >
            <el-option
              v-for="item in prependOption"
              :key="item[defaultPros.label]"
              :label="item[defaultPros.label]"
              :value="item[defaultPros.value]"
            >
            </el-option>
          </el-select>
        </template>
        <template v-if="itemData.prependText">
          {{ itemData.prependText }}
        </template>
      </template>

      <!-- 前置图标 -->
      <template #prefix v-if="itemData.prefix">
        <el-icon
          @click="
            testCallback(itemData.prefixClick) ? callbackItem(itemData) : ''
          "
          :class="testCallback(itemData.prefixClick) ? 'handler' : ''"
        >
          <component :is="itemData.prefix"></component>
        </el-icon>
      </template>
      <!-- 后置图标 -->
      <template #suffix v-if="itemData.suffix">
        <el-icon
          @click="
            testCallback(itemData.suffixClick) ? callbackItem(itemData) : ''
          "
          :class="testCallback(itemData.suffixClick) ? 'handler' : ''"
        >
          <component :is="itemData.suffix"></component>
        </el-icon>
      </template>
    </el-input>
  </template>
</template>
<script setup>
import { defineEmits, defineProps, ref, watch } from 'vue'
import { initDefaultPros, initOptions } from '../../Form/tools'

const emit = defineEmits(['update:modelValue', 'callbackItem'])

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
const appendVal = ref('')
const prependVal = ref('')

const prependOption = ref([])
const appendOption = ref([])

const defaultPros = ref({
  label: 'label',
  value: 'value'
})
/**
 * @description: 更新值变化
 * @return {*}  传递到上层组件
 */
const inputEnter = () => {
  emit('update:modelValue', currentValue.value)
}

/**
 * @description: 检测是否有回调函数
 * @param {*} data
 * @return {*} Boolean
 */
const testCallback = (data) => {
  if (data && Object.prototype.toString.call(data) === '[object Function]') {
    return true
  } else {
    return false
  }
}

/**
 * @description:单独处理的回调函数
 * @param {*} data
 * @return {*}  data 当前所有参数
 */
const callbackItem = (data) => {
  emit('callbackItem', data)
}

/**
 * @description:后缀选择的回调函数
 * @param {*} data
 * @return {*}  data 当前所有参数
 */
const appendSelect = (data) => {
  data.appendVal = appendVal.value
  emit('callbackItem', data)
}
/**
 * @description:前缀选择的回调函数
 * @param {*} data
 * @return {*}  data 当前所有参数
 */
const prependSelect = (data) => {
  data.prependVal = prependVal.value
  emit('callbackItem', data)
}

/**
 * @description: 事件监听赋值
 * @return {*} 更新值变化
 */
watch(
  () => [props.modelValue, props.itemData.appendVal, props.itemData.prependVal],
  (newValue, valueOld) => {
    currentValue.value = newValue[0]
    defaultPros.value = initDefaultPros(props.itemData.props)
    if (props.itemData.append) {
      appendVal.value = newValue[1]
      appendOption.value = initOptions(props.itemData.appendOption)
    }
    if (props.itemData.prepend) {
      prependVal.value = newValue[2]
      prependOption.value = initOptions(props.itemData.prependOption)
    }
  },
  { deep: true, immediate: true }
)

// TODO: 模糊搜索
</script>

<style lang="scss" scoped>
//@import url(); 引入公共css类
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.handler {
  cursor: pointer;
}
</style>
