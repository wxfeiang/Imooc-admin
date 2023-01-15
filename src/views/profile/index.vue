<template>
  <!-- <div class="i18n">
    {{ $t('msg.test') }}
  </div> -->
  <!-- serch -->
  <div class="table">
    <Table
      v-model="page"
      :congig-table="congigTable"
      :loading="loading"
      :table-data="tableData"
      :page-config="{ hasPagination: true }"
      border
      stripe
      size="small"
      height="500"
      @pagination="pagination"
    >
      <template #action="slotdata">
        <!-- {{ slotdata.data.cont }} -->
        <div class="send">
          <el-button type="primary" size="mini" @click="detilData(slotdata.data.row)"
            >详情</el-button
          >
        </div>
      </template>
    </Table>
  </div>
</template>
<script setup>
import { Delete, e404Data, getpicData, getpicDataDetl, put } from "@/api/sys";
import Table from "@/components/Table";
import { ElMessage } from "element-plus";
import { onBeforeMount, ref } from "vue";

//
const params = ref({
  seachData: "",
});
const page = ref({
  size: 1,
  limt: 10,
});
const loading = ref(false);
const tableData = ref({
  total: 0,
  list: [],
});
const congigTable = ref({
  checkbox: true,
  xh: true,
  columns: [
    {
      label: "姓名",
      prop: "username",
      align: "center",
      "show-overflow-tooltip": true,
    },

    {
      label: "职业",
      prop: "classify",
      align: "center",
      "show-overflow-tooltip": true,
    },
    {
      label: "性别",
      prop: "sex",
      align: "center",
      width: 120,
    },
    {
      label: "年龄",
      prop: "score",
      align: "center",
      width: 120,
    },
    {
      label: "登录",
      prop: "logins",
      align: "left",
      width: 120,
    },
    {
      label: "签名",
      prop: "sign",
      align: "left",
      width: 80,
    },
    {
      label: "操作",
      prop: "send",
      align: "left",
      column: "slot",
      slotName: "action",
      width: "100",
    },
  ],
});
onBeforeMount(() => {
  // 获取卡片的高度
  // console.log(props.congigTable, props.page, '----')
});
const pagination = (val) => {
  page.value = { ...val };
  getList();
};

const queryList = () => {
  page.value.size = 1;
  page.value.limt = 10;

  getList();
};

// 查看
const detilData = async (data) => {
  const res = await getpicDataDetl({ id: data.id });
  console.log(res, "del");
};

const getList = async () => {
  loading.value = true;
  const data = { ...params.value, ...page.value };
  const res = await getpicData(data);

  loading.value = false;
  tableData.value.total = res.total;
  tableData.value.list = res.list;
};
getList();
const putData = async (data) => {
  const res = await put(1);
  console.log(res, "del");
};
const DeleteData = async (data) => {
  const res = await Delete({ id: 1 });
  console.log(res, "del");
};
const e404 = async (data) => {
  const res = await e404Data();
  console.log(res, "del");
};

const fileList = ref([]);

const updata = ref({
  seachData: "文件上传测试", //  额外上传参数
});
const apiname = ref("file"); // 上传字段名  默认 file

const handleRemove = (file, uploadFiles) => {
  console.log(file, uploadFiles, "----");
};

const handlePreview = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
