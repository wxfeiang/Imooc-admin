<template>
  <div class="table_warp">
    <!--  :header-cell-class-name="tableStyle" -->
    <el-table
      style="width: 100%"
      ref="tables"
      @selection-change="selection"
      v-loading="loading"
      element-loading-text="数据正在加载中..."
      v-bind="$attrs"
      :data="tableData.list"
    >
      <!-- empty  可扩展图片提示   v-on="$listeners"-->
      <template #empty>
        <el-empty :description="emptyDesc" />
      </template>

      <!-- 多选框-->
      <el-table-column
        type="selection"
        min-width="30"
        v-if="congigTable.checkbox"
        align="center"
      >
      </el-table-column>
      <!-- 默认序号显示 -->
      <el-table-column
        type="index"
        min-width="30"
        v-if="congigTable.xh || congigTable.xh[0]"
        align="center"
        :label="congigTable.xh[1] || '#'"
      >
      </el-table-column>
      <!-- 文本 -->
      <template v-for="(item, index) in congigTable.columns">
        <!-- 判断是否插槽 -->
        <el-table-column v-if="item.column == 'slot'" :key="index" v-bind="item">
          <template v-slot="scope">
            <slot :name="item.slotName" :data="scope"></slot>
          </template>
        </el-table-column>
        <!-- 文本 -->
        <el-table-column v-else :key="item.label" v-bind="item"> </el-table-column>
      </template>
    </el-table>
    <!-- 完整功能分页 -->
    <el-pagination
      v-if="tableData.total > 0 && !congigTable.hasPagination"
      :currentPage="page.size"
      :page-size="page.limt"
      :page-sizes="pageSizes"
      :small="small"
      :disabled="disabled"
      :background="background"
      :layout="layout"
      :total="tableData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup>
import { defineEmits, defineProps, onBeforeMount, ref } from "vue";

const props = defineProps({
  tableData: {
    type: Object,
    required: true,
  },
  congigTable: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  page: {
    type: Object,
    required: true,
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40],
  },
  layout: {
    type: String,
    default: () => "total, sizes, prev, pager, next, jumper",
  },
});

const emptyDesc = ref("未查询到相关数据！");
const selection = () => {
  console.log("选择---");
};
onBeforeMount(() => {
  console.log(props.congigTable, props.page, "--props.page--");
});

const small = ref(false);
const background = ref(true);
const disabled = ref(false);

const emits = defineEmits(["pagination", "update:page"]);

const handleSizeChange = (val) => {
  const pageMessg = {
    size: props.page.size,
    limt: val,
  };
  console.log(props.page, pageMessg, "pageMessg");

  // emits('update:page', pageMessg)
  emits("pagination", pageMessg);
};
const handleCurrentChange = (val) => {
  const pageMessg = {
    size: val,
    limt: props.page.limt,
  };
  //  emits('update:page', pageMessg)
  emits("pagination", pageMessg);
};
</script>
<style lang="scss" scoped></style>
