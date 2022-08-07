<!--
 * @Author: wxfeiang
 * @Description: 案例测试显示页面
 * @Date: 2022-01-15 22:01:21
 * @LastEditTime: 2022-08-07 19:33:31
 * @FilePath: /Imooc-admin/src/views/user-manage/index.vue
-->
<template>
  <div class="" id="">
    <Form :option="option" v-model="fields"></Form>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Form from '@/components/Form'
// dict
const DIC = {
  VAILD: [
    {
      label: '真',
      value: 'true'
    },
    {
      label: '假',
      value: 'false'
    }
  ],
  SEX: [
    {
      label: '男',
      value: 0
    },
    {
      label: '女',
      value: 1
    },
    {
      label: '未知',
      value: 2
    }
  ],
  Checkbox: [
    {
      name: '元',
      id: '111'
    },
    {
      name: '角',
      id: '222'
    },
    {
      name: '分',
      id: '333'
      // disabled: true
    }
  ]
}
// 表单初始值
const fields = ref({
  name: '默认姓名',
  age: 19,
  passwrd: '',
  word: '',
  textarea: '',
  setnumber: 1,
  checkAll: [1],
  checkbox2: ['222'],
  radio: 0
})
// 表单配置项目
const option = ref({
  labelWidth: 80,
  gutter: 20,
  // labelPosition: 'top',
  column: [
    {
      col: 8,
      label: '姓名',
      type: 'input',
      prop: 'name',
      required: true,
      // prefixIcon: 'Search', // 单独组件显示 不会有任何操作  前缀
      click: function (data) {
        console.log('点击事件触发回调函数===>', data)
      }
    },
    {
      col: 8,
      label: '姓名2',
      type: 'input',
      required: true,
      prop: 'name',
      prefix: 'Search', // 组件写法 不会有任何操作  前缀
      prefixClick: function (data) {
        console.log('prefixClick点击事件触发回调函数===>', data)
      }
    },
    {
      col: 8,
      label: '年龄',
      type: 'number',
      required: true,
      prop: 'age',
      suffixIcon: 'Search'
    },
    {
      col: 8,
      label: '年龄',
      type: 'input',

      prop: 'age',
      suffix: 'Search',
      suffixClick: function (data) {
        console.log('suffixClick图标点击事件触发回调函数===>', data)
      }
    },
    {
      col: 8,
      label: '密码',
      type: 'password',
      required: true,
      prop: 'password',
      showPassword: true
    },
    {
      col: 8,
      label: '计步器',
      type: 'inputnumber',
      prop: 'setnumber'
    },
    {
      col: 8,
      label: '单选',
      type: 'radio',
      prop: 'radio',
      // showButton: true,
      required: true,
      option: DIC.SEX
    },
    {
      col: 8,
      label: '网站11',
      type: 'input',
      prop: 'word',
      append: true,
      appendButton: 'Coin',
      appendCallback: function (data) {
        console.log('按钮后缀触发回调函数===>', data, 'this', this)
        this.appendButton = 'Search'
      }
    },
    {
      col: 8,
      label: '网站',
      type: 'input',
      prop: 'word',
      append: true,
      appendText: '.com'
    },
    {
      col: 8,
      label: '后缀选择',
      type: 'input',
      prop: 'word',
      append: true,
      //  appendWidth: '140', //h
      appendVal: 0,
      appendOption: DIC.SEX,
      appendCallback: function (data) {
        console.log('appendCallback触发回调函数===>', data)
      }
    },
    {
      col: 8,
      label: '前缀',
      type: 'input',
      prop: 'word',
      prepend: true,
      prependVal: 1,
      // prependWidth: '140', // h
      prependOption: DIC.SEX,
      prependCallback: function (data) {
        console.log('prependCallback触发回调函数===>', data)
      }
    },
    {
      col: 24,
      label: '文本域描述',
      type: 'textarea',
      prop: 'textarea',
      rows: 3,
      maxlength: 30,
      'show-word-limit': true
    },
    {
      col: 8,
      label: '常用多选框',
      type: 'checkbox',
      required: true,
      prop: 'checkbox2',
      // showButton: true,
      size: 'small',
      option: DIC.Checkbox,
      props: {
        label: 'name',
        value: 'id'
      }
    },
    {
      col: 8,
      label: '全选框',
      type: 'checkbox',
      prop: 'checkAll',
      required: true,
      checkAll: true, //  是否加入全选功能 和单个禁用是冲突的
      option: DIC.SEX
    },
    {
      col: 8,
      label: '不全',
      type: 'checkbox',
      prop: 'checkbox',
      size: 'small',
      disabled: true,
      option: DIC.VAILD,
      config: {
        border: true // 其他配置项
      }
    }
  ],
  actionBtn: [],
  defultBtn: [
    {
      label: '获取参数',
      key: 'serch',
      callback: (data) => {
        console.log('查询数据===>', data)
      }
    },
    {
      label: '重置',
      key: 'rest',
      type: 'danger',
      callback: (data) => {
        console.log('初始化数据', data)
      }
    },
    {
      label: '提交参数',
      key: 'submit',
      callback: (data) => {
        console.log('提交的-初始化组件', data)
      }
    },
    {
      label: '新增',
      key: 'add',
      callback: (data) => {
        console.log('新增按钮')
      }
    }
  ]
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
