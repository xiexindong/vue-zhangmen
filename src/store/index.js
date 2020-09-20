import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    showFooter: true,
    changableNum: 0
}

const getters = {
    isShow (state) {
        return state.showFooter
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations: {},
    actions: {},
    modules: {}
})
