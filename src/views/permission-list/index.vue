<!--
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-15 21:59:17
 * @LastEditTime: 2022-11-20 14:25:44
 * @FilePath: /Imooc-admin/src/views/permission-list/index.vue
-->
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="amount1" label="Amount 1" />
      <el-table-column prop="amount2" label="Amount 2" />
      <el-table-column prop="amount3" label="Amount 3" />
    </el-table>
  </div>
</template>
<script setup>
import { ref } from "vue";

const spanArr = ref([]); // 用于存放每一行记录的合并数
const pos = ref(0);
const tableData = ref([
  {
    id: "12987122",
    name: "Tom",
    amount1: "234",
    amount2: "3.2",
    amount3: 10,
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "165",
    amount2: "4.43",
    amount3: 12,
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "324",
    amount2: "1.9",
    amount3: 9,
  },
  {
    id: "12987125",
    name: "Tom",
    amount1: "621",
    amount2: "2.2",
    amount3: 17,
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "539",
    amount2: "4.1",
    amount3: 15,
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "53fdd9",
    amount2: "4.1",
    amount3: 15,
  },
  {
    id: "12987126",
    name: "Tom",
    amount1: "53fdd9",
    amount2: "3.1",
    amount3: 15,
  },
]);
const getSpanArr = (data) => {
  // data就是我们从后台拿到的数据
  for (var i = 0; i < data.length; i++) {
    if (i === 0) {
      spanArr.value.push(1);
      pos.value = 0;
    } else {
      // 判断当前元素与上一个元素是否相同
      if (data[i].id === data[i - 1].id) {
        spanArr.value[pos.value] += 1;
        spanArr.value.push(0);
      } else {
        spanArr.value.push(1);
        pos.value = i;
      }
    }
  }
};
const getSpan = (list) => {
  const newArr = [];
  const obj = {};
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      obj.row = 1;
      obj.col = 1;
      newArr.push(obj);
    } else {
      if (list[i].id === list[i - 1].id) {
        newArr.push({ row: 0, col: 0 });
        const index = list.findIndex((item) => {
          return item.id === list[i - 1].id;
        });
        newArr[index].row++;
      } else {
        newArr.push({ row: 1, col: 1 });
      }
    }
  }
  return newArr;
};
const objectSpanMethod = ({ row, column, rowIndex, columnIndex }) => {
  // if (columnIndex === 1) {
  //   // 二维数组存储的数据 取出
  //   const _row = spanArr.value[rowIndex]
  //   const _col = _row > 0 ? 1 : 0
  //   return {
  //     rowspan: _row,
  //     colspan: _col
  //   }
  // } else {
  //   return false
  // }
  const arr = getSpan(tableData.value);
  // console.log(arr);
  if (columnIndex < 2) {
    const row = arr[rowIndex].row;
    const col = arr[rowIndex].col;
    return {
      rowspan: row,
      colspan: col,
    };
  }
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
