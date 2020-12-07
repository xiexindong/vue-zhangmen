/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Model from '../views/bili/v-model'
// import DetailCard  from '../views/DetailCard.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'model',
    component: Model
},
{
    path: '/compute',
    name: 'compute',
    component: () =>
        import ( /*webpackChunkName: "bili"*/ '../views/bili/compute')
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router


// {
//     path: '/Admin',
//     name: 'Admin',
//     component: () =>
//     import ( /* webpackChunkName: "Admin" */ '../views/Admin.vue')
// }