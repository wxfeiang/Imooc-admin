<!--
 * @Author: wxfeiang
 * @Description: 检索组件
 * @Date: 2022-01-15 22:01:21
 * @LastEditTime: 2022-08-05 11:26:07
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
  age: 19,
  password: '',
  word: '',
  textarea: ''
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
      required: true,
      prefixIcon: 'Apple' // 单独组件显示 不会有任何操作  前缀
    },
    {
      col: 6,
      label: '年龄',
      type: 'input',
      required: true,
      prop: 'age',
      suffix: 'Search', // TODO: 图标有事件
      click: ({ value, column }) => {
        console.log('dianji le --')
      }
    },
    {
      col: 12,
      label: '密码',
      type: 'password',
      required: true,
      prop: 'password',
      showPassword: true
    },
    {
      col: 12,
      label: '网站',
      type: 'input',
      prop: 'word',
      append: true,
      appendButton: 'Coin'
    },
    {
      col: 12,
      label: '网站',
      type: 'input',
      prop: 'word',
      append: true,
      appendText: '.com'
    },
    {
      col: 12,
      label: '网站22',
      type: 'input',
      prop: 'word',
      append: true,
      selectOption: [
        {
          value: '111',
          label: '选项一'
        },
        {
          value: '222',
          label: '选项2'
        }
      ]
    },
    {
      col: 12,
      label: '前缀',
      type: 'input',
      prop: 'word',
      prepend: true,
      prependSlect: 'slect'
    },
    {
      col: 24,
      label: '文本域描述',
      type: 'textarea',
      prop: 'textarea',
      rows: 3,
      maxlength: 30,
      'show-word-limit': true
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
    },
    {
      label: '提交',
      key: 'submit',
      callback: (data) => {
        console.log(
          '提交的-初始化组件',
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
        console.log('查询数据', data, '调用重置方法,初始化数据', fields.value)
      }
    }
  ]
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
