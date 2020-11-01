<template>
    <div>
        <p>{{ name }}</p>
        <p>书的总价格: {{ totalPrice }} </p>
        <p>书的总价格: {{ fullName }} </p>
        <button @click="setFullName">改变数值</button>
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
            lastName: 'zhangsan'
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
                return this.firstName + ' ' + this.lastName
            }
        }
    },
    methods: {
        setFullName: function () {
            this.fullName = 'wangwu zhangsan2'
        }
    }

}
</script>

<style lang="less" scoped>

</style>
