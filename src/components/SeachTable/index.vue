<!--
 * @Author: wxfeiang
 * @Description: 搜索组件
 * @Date: 2022-06-20 18:36:03
 * @LastEditTime: 2022-08-03 11:01:12
 * @FilePath: /Imooc-admin/src/components/SeachTable/index.vue
-->
<template>
  <div class="serch">
    <el-form
      :model="modelValue"
      :label-width="option.labelWidth"
      ref="ruleFormRef"
    >
      <el-row :gutter="20">
        <el-col
          :span="item.col || 6"
          v-for="(item, index) in option.serchFrom"
          :key="index"
        >
          <el-form-item :label="item.label">
            <Dinput
              :itemData="item"
              :model-value="modelValue[`${item.prop}`]"
              @update:modelValue="handleValueChange($event, item.prop)"
            />
          </el-form-item>
        </el-col>
        <!-- 按钮部分 -->
        <el-col :span="6" :offset="6" :style="butSty">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-col>
        <!-- 操作按钮放在一行    新增 导出  。。。。 -->
      </el-row>
      <el-row :gutter="20">
        <el-button
          type="primary"
          @click="callSelf(item)"
          v-for="(item, index) in option.actionBtn"
          :key="index"
        >
          {{ item.label }}
        </el-button>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, ref } from 'vue'
import Dinput from '../Form/input.vue'

const emit = defineEmits(['update:modelValue'])
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
const ruleFormRef = ref(null)
const handleValueChange = (value, field) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
const callSelf = (data) => {
  if (data.action == 'add') {
  }
  data.cb && data.cb(props.modelValue)
}

const resetForm = (formEl) => {
  // if (!formEl) return
  formEl.resetFields()
}
const butSty = ref({
  'text-align': 'right'
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
