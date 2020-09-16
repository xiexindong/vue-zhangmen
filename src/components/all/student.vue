<template>
  <div>{{ data }} </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    console.log('222,beforeCreate')
  },
  created () {
    console.log('222,created')
  },
  beforeMount () {
    console.log('222,beforeMount')
  },
  mounted () {
    console.log('222,mounted')
  },
  beforeUpdate () {
    console.log('222,beforeUpdate')
  },
  updated () {
    console.log('222,updated')
  },
  beforeDestroy () {
    console.log('222,beforeDestroy')
  },
  destroyed () {
    console.log('222,destroyed')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
