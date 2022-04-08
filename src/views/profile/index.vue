<template>
  <div class="table">
    <Table :tableData="tableData" :congigTable="congigTable">
      <template v-slot:action="slotdata">
        <!-- {{ slotdata.data.cont }} -->
        <div class="send">
          <el-button @click="delData(slotdata.data.$index)">删除</el-button>
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup>
import Table from '@/components/Table'
import { ref } from 'vue'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const congigTable = ref({
  checkbox: true,
  xh: true,
  columns: [
    {
      label: '序号',
      width: '40',
      prop: 'jlxh',
      align: 'center'
    },
    {
      label: '姓名',
      prop: 'name',
      align: 'left',
      width: '100'
    },
    {
      label: '日期',
      prop: 'date',
      align: 'left',
      width: '100'
    },
    {
      label: '地址',
      prop: 'address',
      align: 'left',
      width: '100'
    },

    {
      label: '操作',
      prop: 'send',
      align: 'center',
      column: 'slot',
      slotName: 'action'
    }
  ]
})

// 删除数据操作
const delData = (data) => {
  console.log(data)
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
