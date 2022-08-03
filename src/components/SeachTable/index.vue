<!--
 * @Author: wxfeiang
 * @Description: 搜索组件
 * @Date: 2022-06-20 18:36:03
 * @LastEditTime: 2022-08-03 22:36:08
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
      <el-row :gutter="20">
        <template v-for="(item, index) in formItem" :key="index">
          <el-col :span="item.col || 6">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :prop="item.prop"
            >
              <Dinput
                :itemData="item"
                :model-value="modelValue[`${item.prop}`]"
                @update:modelValue="handleValueChange($event, item.prop)"
              />
            </el-form-item>
          </el-col>
        </template>

        <!-- 按钮部分 -->
        <el-col
          :span="6"
          :offset="6"
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
      <el-row :gutter="20">
        <template v-for="(item, index) in option.actionBtn" :key="index">
          <el-button
            @click="callSelf(item)"
            :type="item.type ? item.type : 'primary'"
          >
            {{ item.label }}
          </el-button>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { defineEmits, defineProps, onBeforeMount, ref } from 'vue'
import Dinput from '../Form/input.vue'
import createRules from './createRules'
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
  formItem.value = createRules(props.option.column, props.modelValue)
})
const handleValueChange = (value, field) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
const callSelf = (data) => {
  if (data.key === 'submit') {
    //  需要执行表单验证
    submit(props.modelValue)
    return
  }
  if (data.key === 'rest') {
    resetForm(data)
  }
  if (
    data.callback &&
    Object.prototype.toString.call(data.callback) === '[object Function]'
  ) {
    callback(data)
  }
}

const submit = (data) => {
  console.log(data, 'susubmit')
}
const resetForm = (data) => {
  ruleFormRef.value.resetFields()
}
const callback = (data) => {
  data.callback(props.modelValue)
}
const butSty = ref({
  'text-align': 'right'
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
