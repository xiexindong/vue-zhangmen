<template>
    <div>战三
        <!-- <template v-for="(item, index) in list" >
            <div :key="item.id">{{item.text}}--{{index}}</div>
                 <span :key="item.id"> {{item.text}}</span>
        </template> -->
        <com>
            <template v-slot="scope">
            {{scope.key}}
            <button >删除</button>
            </template>
        </com>
         <com>
            <!-- <template v-slot="{key}"></template> -->
        </com>

    </div>
</template>

<script>
const com = {
  template: `
    <div>
      其他内容
      <slot key="value" key2="value2" key3="value3"></slot>
    </div>
  `
}
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
    },
    components: {
        com
    }
}
</script>

<style lang="less" scoped>

</style>
