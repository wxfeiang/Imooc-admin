<template>
  <!-- <div class="i18n">
    {{ $t('msg.test') }}
  </div> -->
  <!-- serch -->
  <el-button type="primary" size="default"></el-button>
  <!-- BUG -->
  <!-- //TODO:11222-->
  <SeachTable> fghh </SeachTable>
  <div class="table">
    <Table
      :congigTable="congigTable"
      :loading="loading"
      :tableData="tableData"
      @pagination="pagination"
      :pageConfig="{ hasPagination: true }"
      v-model:page="page"
      border
      stripe
      size="small"
      height="500"
    >
      <template v-slot:action="slotdata">
        <!-- {{ slotdata.data.cont }} -->
        <div class="send">
          <el-button
            type="primary"
            @click="detilData(slotdata.data.row)"
            size="mini"
            >详情</el-button
          >
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup>
import { getpicData, getpicDataDetl } from '@/api/sys'
import SeachTable from '@/components/SeachTable'
import Table from '@/components/Table'
import { onBeforeMount, ref } from 'vue'

//
const params = ref({
  pictype: 'wangyouzipai'
})
const page = ref({
  size: 1,
  limt: 10
})
const loading = ref(false)
const tableData = ref({
  total: 0,
  list: []
})
const congigTable = ref({
  checkbox: true,
  xh: true,
  columns: [
    {
      label: '标题 ',
      prop: 'title',
      align: 'center',

      'show-overflow-tooltip': true
    },

    {
      label: 'URL',
      prop: 'id',
      align: 'center',
      'show-overflow-tooltip': true
    },
    {
      label: 'type',
      prop: 'type',
      align: 'left',
      width: 120
    },
    {
      label: '日期',
      prop: 'time',
      align: 'left',
      width: 80
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
onBeforeMount(() => {
  // 获取卡片的高度
  // console.log(props.congigTable, props.page, '----')
})
const pagination = (val) => {
  page.value = { ...val }
  getList()
}

const queryList = () => {
  page.value.limt = 10
  page.value.size = 1
  getList()
}

// 查看
const detilData = async (data) => {
  const res = await getpicDataDetl(data.id)
  console.log(res, 'del')
}

const getList = async () => {
  loading.value = true
  const data = { ...params.value, ...page.value }
  const res = await getpicData(data)
  if (res && res.list.length > 0) {
    loading.value = false
    tableData.value.total = res.total
    tableData.value.list = res.list
  }
}
getList()
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
