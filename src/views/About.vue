<template>
  <div class="about">
    <div class="block">
    <el-table
      :data="tableData"
      tooltip-effect="dark"
       @selection-change="handleSelectionChange"
       :row-key="getRowKeys"
      style="width: 100%">
      <el-table-column
      :reserve-selection="true"
       type="selection"
       width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  </div>
</template>
<script>
import { tabelData } from './data'

export default {
  /* eslint-disable */
    name: 'admin',
    data () {
      return {
        getRowKeys(row) {
            return row.index
        },
         currentPage3: 1,
         tableData: []
      }
    }, 
  created(){
    this.tableData = tabelData.slice(0,4)
  },

    
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        let index = (val-1)*4
        this.tableData = tabelData.slice(index,index + 4)
      }, 
      handleSizeChange(value){
        console.log('value',value)
      }, 
      handleSelectionChange(val){
        console.log('val',val)
      }

    },
}
</script>

<style lang="scss" scoped>

</style>

