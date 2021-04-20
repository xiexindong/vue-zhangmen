<template>
  <div>
    <el-table
        :data = data
        @sort-change= sortChange
        @selection-change = handleSelectionChange
      >
        <template v-for="item in column">
             <el-table-column
              :key="item.prop"
              :prop="item.prop"
              :label="item.label"
              >
                <template slot-scope="scope">
                    <Expend v-if="item.render" :row="scope.row" :render="item.render"></Expend>
                    <span v-else >{{scope.row[item.prop]}}</span>
                </template>
              </el-table-column>
        </template>
      </el-table>
  </div>
</template>

<script>
import Expend from './expend'
export default {
    /* eslint-disable */
  components:{
    Expend
  },

  data(){
    return{

    }
  },
  watch:{
    column:{
      handler:function(val){
        console.log(val)
      },
      immediate: true
    }
  },
  props:{
    data:{
       type:Array,
       required:true,
    },
    column:{
       type:Array,
       required:true,
       default:[], 
    }

  },
 
  methods:{
    sortChange(){

    },
    handleSelectionChange(){

    }

  }
}
</script>