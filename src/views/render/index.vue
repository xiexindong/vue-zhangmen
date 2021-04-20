<template>
  <div class="about">
    <div class="block">
      <TableList
        :data="data"
        :column="column"
      />
  </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import TableList from './tableList'
import getColumn from './column'
import { tabelData } from '../data'
export default {
  /* eslint-disable */
    name: 'admin',
    data () {
      return {
        data:tabelData,
        column:getColumn(this)
      }     
    }, 
    components:{
      TableList
    },
    created(){
      
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
      },
      deletehandle(row){
         console.log('row',row)
          Message({
            message:"操作成功过",
            type:'success',
          })
      }
      

    },
}
</script>

<style lang="scss" scoped>

</style>

