pa<template>
  <div class="train-city">
    <span @click='select(`大连`)'>大连</span>
    <span>城市-{{ city }}</span>
  </div>
</template>
<script>
export default {
  name: 'trainCity',
  props: {
    city: {
        type: name,
        default: ''
    }
  },
  methods: {
      select (val) {
          const data = {
                cityname: val
         }
        this.$emit('showCityName', data)
        // select事件触发后，自动触发showCityName事件
      }
  }
}
</script>
