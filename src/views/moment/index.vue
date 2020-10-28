<template>
    <div>
        {{ date }}
    </div>
</template>

<script>
import moment from 'monent'
export default {
    date () {
        return {
          date: 'Wed Aug 05 2020 08:00:00 GMT+0800'
        }
    },
    methods: {
        handleDate () {
            this.date = moment().format(this.date)
        }
    }
}
</script>
