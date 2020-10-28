import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],
    changeShowCom: true,
    count: 1
}

const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => { console.log(todo.id) })
    },
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
