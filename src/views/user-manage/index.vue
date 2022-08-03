<!--
 * @Author: wxfeiang
 * @Description: 检索组件
 * @Date: 2022-01-15 22:01:21
 * @LastEditTime: 2022-08-03 22:29:37
 * @FilePath: /Imooc-admin/src/views/user-manage/index.vue
-->
<template>
  <div class="" id="">
    <SeachTable :option="option" v-model="fields"></SeachTable>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import SeachTable from '@/components/SeachTable'
const fields = ref({
  name: 'sss',
  age: 19
})
const option = ref({
  labelWidth: 60,
  gutter: 20,
  // labelPosition: 'top',
  column: [
    {
      col: 6,
      label: '姓名',
      type: 'input',
      prop: 'name',
      required: true
    },
    {
      col: 6,
      label: '年龄',
      type: 'select',
      required: true,
      prop: 'age'
    }
  ],
  actionBtn: [
    {
      label: '新增',
      key: 'add',
      callback: (data) => {
        console.log(
          '更新后的-初始化组件',
          data,
          '=======> 需要回显',
          fields.value
        )
      }
    }
  ],
  defultBtn: [
    {
      label: '查询',
      key: 'serch',
      callback: (data) => {
        console.log('查询数据', data, '调用查询方法', fields.value)
      }
    },
    {
      label: '重置',
      key: 'rest',
      type: 'danger',
      callback: (data) => {
        fields.value = {
          name: '',
          age: null
        }
        console.log('查询数据', data, '调用重置方法,初始化数据', fields.value)
      }
    }
  ]
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
