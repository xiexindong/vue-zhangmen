<template>
<div>
<div>{{ msg }} </div>
</div>
</template>

<script>
export default {
  name: 'teacher',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  beforeCreate () {
    console.log('1111,beforeCreate')
  },
  created () {
    console.log('1111,created')
  },
  beforeMount () {
    console.log('1111,beforeMount')
  },
  mounted () {
    console.log('1111,mounted')
  },
  beforeUpdate () {
    console.log('1111,beforeUpdate')
  },
  updated () {
    console.log('1111,updated')
  },
  beforeDestroy () {
    console.log('1111,beforeDestroy')
  },
  destroyed () {
    console.log('1111,destroyed')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
