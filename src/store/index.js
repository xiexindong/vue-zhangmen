import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    changeShowCom: true,
    count: 1
}

const getters = {
    getCount (state) {
        return state.count
    },
    isShow (state) {
        return state.changeShowCom
    }
}

const actions = {
    addCount (context, num) {

    },
    delCount (context, num) {

    }

}

export default new Vuex.Store({
    state,
    getters,
    mutations: {},
    actions,
    modules: {}
})
