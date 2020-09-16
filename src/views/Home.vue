<template>
  <div class="home">
    <All :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import All from '@/components/all/all.vue'

export default {
  name: 'Home',
  components: {
    All
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    setTime () {
      setTimeout(() => {
        this.msg = 'lisi'
      }, 4000)
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
    this.setTime()
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
