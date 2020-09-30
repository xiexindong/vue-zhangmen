<template>
    <div>
        父組件
        <TrainCity @showCityName="updateCity" :city='toCity'/>
    </div>
</template>

<script>
import TrainCity from './custom'
export default {
    components: {
        TrainCity
    },
    data () {
        return {
            toCity: '北京'
        }
    },
    methods: {
        updateCity (data) {
            debugger
            this.toCity = data.cityname
        }
    }
}
</script>

<style lang="less" scoped>

</style>
