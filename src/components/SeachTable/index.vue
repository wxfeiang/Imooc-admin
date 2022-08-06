<!--
 * @Author: wxfeiang
 * @Description: from组件
 * @Date: 2022-06-20 18:36:03
 * @LastEditTime: 2022-08-06 15:21:12
 * @FilePath: /Imooc-admin/src/components/SeachTable/index.vue
-->
<template>
  <div class="serch">
    <el-form
      :model="modelValue"
      :label-width="option.labelWidth"
      ref="ruleFormRef"
      :label-position="option.labelPosition ? option.labelPosition : 'left'"
    >
      <el-row :gutter="option.gutter ? option.gutter : '20'">
        <template v-for="(item, index) in formItem" :key="index">
          <el-col :span="item.col || 6">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :prop="item.prop"
            >
              <component
                :is="modules[item.inType]"
                :itemData="item"
                :model-value="modelValue[`${item.prop}`]"
                @update:modelValue="handleValueChange($event, item.prop)"
                @callbackItem="callbackItem"
              >
              </component>
            </el-form-item>
          </el-col>
        </template>

        <!-- 按钮部分 -->
        <!--   :span="6"
          :offset="6" -->
        <el-col
          :style="butSty"
          v-if="option.defultBtn && option.defultBtn.length > 0"
        >
          <template v-for="(item, index) in option.defultBtn" :key="index">
            <el-button
              @click="callSelf(item)"
              :type="item.type ? item.type : 'primary'"
            >
              {{ item.label }}
            </el-button>
          </template>
        </el-col>
        <!-- 操作按钮放在一行    新增 导出  。。。。 -->
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, onBeforeMount, ref } from 'vue'
import createRules from './createRules'
// 自动化的规则，通type属性，自动读到目录组件 webpack
const modules = {}
const requireComponent = require.context('../control/', true, /index.vue$/)
requireComponent.keys().forEach((item) => {
  const key = item.split('/')
  const name = key[1]
  // 组件集成
  modules[name] = requireComponent(item).default
})

const ruleFormRef = ref(null)
const emit = defineEmits(['update:modelValue', 'resetFields'])
const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  }
})
const formItem = ref([])
onBeforeMount(() => {
  // 数据初始化处理
  formItem.value = createRules(props.option.column, props.modelValue)
})
/**
 * @description:  数据双向绑定 父组件更新
 * @param {*} value
 * @param {*} field
 * @return {*}
 */
const handleValueChange = (value, field) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
/**
 * @description: 按钮回调函数处理
 * @param {*} data
 * @return {*}
 */
const callSelf = (data) => {
  if (data.key === 'submit') {
    //  需要执行表单验证
    submit(data)
    return
  }
  if (data.key === 'rest') {
    resetForm(data)

    return
  }
  if (
    data.callback &&
    Object.prototype.toString.call(data.callback) === '[object Function]'
  ) {
    callback(data)
  }
}

/**
 * @description:  提交按钮 触发验证规则
 * @param {*} data
 * @return {*}  true false
 */
const submit = (data) => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      callback(data)
    } else {
    }
  })
}
/**
 * @description:  重置
 * @param {*} data
 * @return {*} 字段初始值
 */
const resetForm = (data) => {
  ruleFormRef.value.resetFields()

  //  重置为初始化的时候的值
  callback(data)
}
/**
 * @description:  统一处理回调函数
 * @param {*} data
 * @return {*}
 */
const callback = (data) => {
  data.callback(props.modelValue)
}
/**
 * @description:  单独项目回调函数
 * @param {*} data
 * @return {*}
 */
const callbackItem = (data) => {
  if (
    data.click &&
    Object.prototype.toString.call(data.click) === '[object Function]'
  ) {
    data.click(data)
  } else if (
    data.prependCallback &&
    Object.prototype.toString.call(data.prependCallback) === '[object Function]'
  ) {
    data.prependCallback(data)
  } else if (
    data.appendCallback &&
    Object.prototype.toString.call(data.appendCallback) === '[object Function]'
  ) {
    data.appendCallback(data)
  } else if (
    data.prefixClick &&
    Object.prototype.toString.call(data.prefixClick) === '[object Function]'
  ) {
    data.prefixClick(data)
  } else if (
    data.suffixClick &&
    Object.prototype.toString.call(data.suffixClick) === '[object Function]'
  ) {
    data.suffixClick(data)
  } else if (
    data.callback &&
    Object.prototype.toString.call(data.callback) === '[object Function]'
  ) {
    data.callback(data)
  }
}
const butSty = ref({
  'text-align': 'center'
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
