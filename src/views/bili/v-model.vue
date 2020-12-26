<template>
    <div>
        <!-- <input type = 'text' v-model = 'message' /> -->
        <!-- {{ message }} -->
        1---------------------------------------------------1<br/>
        <!-- :value  === v-bind:value -->
        <!-- <input type= 'text' :value = 'message' v-on:input='inputchange'/> -->
        <input type= 'text' :value = 'message' @input='message = $event.target.value'/>
        {{ message }}

    </div>
</template>
<script>
import ExtendCom from "./hello.js"
export default {
    data () {
        return {
            message: '数据双向绑定'
        }
    },
    methods: {
        inputchange: function (event) {
            console.log(event)
            this.message = event.target.value
            ExtendCom('nihao')
        }
    }
}
</script>
<style lang="less" scoped>
</style>
