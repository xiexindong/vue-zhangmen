<template>
    <div>{{ data }}</div>
</template>

<script>
export default {
    data () {
        return {
            data: 111
        }
    },

    mounted () {
        console.log(this.$store.getters.doneTodos)
    }
}
</script>

<style lang="stylus" scoped>
</style>
