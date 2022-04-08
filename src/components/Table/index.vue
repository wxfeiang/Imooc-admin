<template>
  <!--  :header-cell-class-name="tableStyle" -->
  <el-table
    empty-text="暂无数据"
    :data="tableData"
    style="width: 100%"
    ref="tables"
    @selection-change="selection"
  >
    <!-- 多选 -->
    <el-table-column
      type="selection"
      min-width="30"
      v-if="congigTable.checkbox"
      align="center"
    >
    </el-table-column>

    <!-- 文本 -->
    <template v-for="(item, index) in congigTable.columns">
      <!-- 判断是否插槽 -->
      <el-table-column
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width ? item.width : '60'"
        :align="item.align"
        v-if="item.column == 'slot'"
      >
        <template v-slot="scope">
          <slot :name="item.slotName" :data="scope"></slot>
        </template>
      </el-table-column>
      <!-- 文本 -->
      <el-table-column
        v-else
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        :min-width="item.width ? item.width : '60'"
        :align="item.align"
        :show-overflow-tooltip="true"
      >
      </el-table-column>
    </template>
  </el-table>
</template>
<script setup>
import { defineProps, onBeforeMount } from 'vue'

const props = defineProps({
  tableData: {
    type: Array,
    required: true
  },
  congigTable: {
    type: Object,
    required: true
  }
})
const selection = () => {
  console.log('选择---')
}
onBeforeMount(() => {
  console.log(props.congigTable, '----')
})
</script>
<style lang="scss" scoped></style>
