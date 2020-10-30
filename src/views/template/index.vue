<template>
    <div>战三
        <template v-for="(item, index) in list" >
            <div :key="item.id">{{item.text}}--{{index}}</div>
                 <span :key="item.id"> {{item.text}}</span>
        </template>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [{
                id: '010120',
                text: 'How'
            },
            {
                id: '010121',
                text: 'How1'
            },
            {
                id: '010122',
                text: 'How2'
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
