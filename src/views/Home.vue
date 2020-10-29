<template>
<div>
  <el-calendar v-model="calendarValue" id="calendar">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
       slot="dateCell"
       slot-scope="{date, data}">
        <!--自定义内容-->
          <div>
             <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
                <div v-for="item in calendarData" :key="JSON.stringify(item)">
                   <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                     <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                          <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                               <div class="is-selected">{{item.things}}</div>
                          </el-tooltip>
                       </div>
                    <div v-else></div>
                   </div>
               <div v-else></div>
             </div>
          </div>
      </template>
</el-calendar>
<el-button @click="toggleClassType">测试按钮</el-button>
{{ classType }}
</div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'calendar',
        data () {
            return {
                calendarData: [
                    { months: ['09', '11'], days: ['01', '15'], things: 'true' },
                    { months: ['10', '11'], days: ['02'], things: '去公园野炊' },
                    { months: ['11'], days: ['02'], things: '看星星' }
                ],
                calendarValue: new Date()
                // classType: () => {
                //     return this.$store.classType
                // }
            }
        },
        computed: {
          ...mapGetters(['classType'])
        },

        mounted () {
            this.getSignallingSelectList()
        },

        watch: {
            calendarValue: function (val) {
              console.log(val)
              setTimeout(() => {
                 this.calendarData = [
                    { months: ['08'], days: ['12', '09'], things: 'lisi' }
                 ]
              })
            }
        },

        methods: {
            ...mapActions('dictionary', ['toggleClassTypeAction', 'getSignallingSelectList']),
            toggleClassType () {
                const classType = +this.classType === 2 ? 0 : 2
                this.toggleClassTypeAction(classType)
                localStorage.setItem('classType', classType)
                }
        }
    }
</script>
<style>
    .calendar-day{
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
    }
    .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }
    #calendar .el-button-group>.el-button:not(:first-child):not(:last-child):after{
        content: '当月';
    }
</style>
