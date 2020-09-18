
<template>
    <el-calendar v-model="value">
</el-calendar>
</template>
<script>
export default {
  /* eslint-disable */
    name: 'admin',
    data () {
      return {
        value: new Date()
      }
    }, 
    watch: {
      value: {
        handler(val) {
            var d = new Date(val); 
            var stime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            console.log( new Date(stime).getTime() )
        }
      }
    }, 
    methods: {
      
    },
}
</script>

<style lang="scss" scoped>

</style>
