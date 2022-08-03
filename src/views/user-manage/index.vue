<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-15 22:01:21
 * @LastEditTime: 2022-08-02 23:10:36
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
  labelWidth: 110,
  gutter: 20,
  serchFrom: [
    {
      col: 6,
      label: '姓名',
      type: 'input',
      require: true,
      prop: 'name'
    },
    {
      col: 6,
      label: '年龄',
      type: 'select',
      require: true,
      prop: 'age'
    }
  ],
  actionBtn: [
    {
      label: '新增',
      action: 'add',
      cb: (data) => {
        console.log(
          '更新后的-初始化组件',
          data,
          '=======> 需要回显',
          fields.value
        )
      }
    }
  ]
})
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
