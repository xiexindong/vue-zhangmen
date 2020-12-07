<template>
    <div>
        <p>{{ name }}</p>
        <p>书的总价格: {{ totalPrice }} </p>
        <p>书的总价格: {{ fullName }} </p>
        <button @click="setfirstName">改变数值</button>
        <p>计算属性 无缓存: {{ setFullName() }}</p>
        <p>计算属性 无缓存: {{ setFullName() }}</p>
        <p>计算属性 无缓存: {{ setFullName() }}</p>
        <p>计算属性 无缓存: {{ setFullName() }}</p>
        <p>{{ otherName }}</p>
        <p>以上执行 四次</p>
        <p>计算属性 有缓存: {{ fullName }}</p>
        <p>计算属性 有缓存: {{ fullName }}</p>
        <p>计算属性 有缓存: {{ fullName }}</p>
        <p>计算属性 有缓存: {{ fullName }}</p>
        <p>以上执行 一次</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'lisi',
            book: [
                { id: 110, name: 'javascript', price: 111 },
                { id: 111, name: 'node', price: 120 },
                { id: 112, name: 'js', price: 130 },
                { id: 113, name: 'css', price: 140 }
            ],
            firstName: 'lisi',
            lastName: 'zhangsan',
            otherName: ''
        }
    },
    computed: {
        totalPrice: function () {
            let result = 0
            const book = this.book

            // for 增强型
            // for (const i in book) {
            //     result += book[i].price
            // }

            for (const item of book) {
                result += item.price
            }

            // for (let i = 0; i < book.length; i++) {
            //      result += book[i].price
            // }
            return result
        },
        // totalPrice: function () {
        //     const book = this.book
        //     let sumResult  = 0
        //     const result = book.reduce(function (preValue, curValue, currentIndex, arr) {
        //         console.log('preValue', preValue)
        //         console.log('curValue', curValue)
        //         return total.price
        //     })
        //     return result
        // }
        // 这种是省略 set 的 compute
        // fullName: function () {
        //     return this.firstName + ' ' + this.lastName
        // }
        fullName: {
            set: function (newValue) {
                const name = newValue.split(' ')
                this.firstName = name[0]
                this.lastName = name[1]
            },
            get: function () {
                console.log('执行一次')
                return this.firstName + ' ' + this.lastName
            }
        }
    },
    methods: {
        setFullName: function () {
            this.otherName = 'zjamgsa'
        },
        setfirstName: function () {
               this.fullName = 'zhang s22ee'
        }
    }

}
</script>

<style lang="less" scoped>

</style>
