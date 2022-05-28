<template>
  <!-- <div class="i18n">
    {{ $t('msg.test') }}
  </div> -->
  <!-- serch -->
  <div class="serch">
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple" />
        检索1</el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple" />
        2</el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple" />
        2</el-col
      >
      <el-col :span="6"
        ><div class="grid-content bg-purple" />
        2</el-col
      >
    </el-row>
  </div>
  <SeachTable></SeachTable>
  <div class="table">
    <Table
      :congigTable="congigTable"
      :loading="loading"
      :tableData="tableData"
      @pagination="pagination"
      border
      stripe
    >
      <template v-slot:action="slotdata">
        <!-- {{ slotdata.data.cont }} -->
        <div class="send">
          <el-button @click="delData(slotdata.data.$index)" size="mini"
            >删除</el-button
          >
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup>
import { getoutheMenu } from '@/api/sys'
import SeachTable from '@/components/SeachTable'
import Table from '@/components/Table'
import { ref } from 'vue'

//
// const parms = ref({
//   query: {
//     a: 1
//   }
// })
const loading = ref(true)
const tableData = ref({
  total: 0,
  list: [
    {
      date: '2016-05-03',
      name: 'Tom33333',
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
  ]
})
const congigTable = ref({
  checkbox: true,
  xh: true,
  columns: [
    {
      label: 'mingchen ',
      prop: 'name',
      align: 'left'
    },
    {
      label: '日期',
      prop: 'date',
      align: 'left'
    },
    {
      label: '目录名称',
      prop: 'titele',
      align: 'center',
      'show-overflow-tooltip': true
    },

    {
      label: '操作',
      prop: 'send',
      align: 'left',
      column: 'slot',
      slotName: 'action',
      width: '100'
    }
  ]
})
const pagination = (val) => {
  console.log(val, '分页参数')
}

// 删除数据操作
const delData = (data) => {
  console.log(data)
}
const getList = async () => {
  const data = await getoutheMenu()
  if (data && data.length > 0) {
    loading.value = false
    tableData.value.total = data.length
    tableData.value.list = data
    console.log(tableData.value)
  }
}
getList()
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
