<!--
 * @Author: wxfeiang
 * @Description: 检索组件
 * @Date: 2022-01-15 22:01:21
 * @LastEditTime: 2022-08-05 16:32:02
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
    }
  ],
  Checkbox: [
    {
      label: '第一个',
      value: '111'
    },
    {
      label: '第二个',
      value: '222'
    },
    {
      label: '第三个个',
      value: '333'
      // disabled: true
    }
  ]
}
// 表单初始值
const fields = ref({
  name: 'sss',
  age: 19,
  passwrd: '',
  word: '',
  textarea: '',
  setnumber: 1,
  checkbox: ['111']
})

// 表单配置项目
const option = ref({
  labelWidth: 80,
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
      col: 6,
      label: '密码',
      type: 'password',
      required: true,
      prop: 'password',
      showPassword: true
    },
    {
      col: 6,
      label: '计步器',
      type: 'inputnumber',
      prop: 'setnumber'
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
      dicData: DIC.VAILD
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
    },
    {
      col: 8,
      label: '多选框',
      type: 'checkbox',
      prop: 'checkbox',
      required: true,
      checkAll: true, //  是否加入全选功能 和单个禁用是冲突的
      dicData: DIC.Checkbox
    },
    {
      col: 8,
      label: '不全',
      type: 'checkbox',
      prop: 'checkbox',
      size: 'small',
      disabled: true,
      dicData: DIC.Checkbox,
      config: {
        border: true // 其他配置项
      }
    },
    {
      col: 8,
      label: '其他',
      type: 'checkbox',
      prop: 'checkbox',
      size: 'small',
      dicData: DIC.Checkbox
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
