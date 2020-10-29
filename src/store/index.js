import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import dictionary from './modules/dictionary'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        dictionary
    },
    getters
})
