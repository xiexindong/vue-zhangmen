/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'admin',
    component: Admin
},{
    path: '/model',
    name: 'model',
    component: () => import (/*webpackChunkName: "model"*/  '../views/bili/compute')
},
{
    path: '/compute',
    name: 'compute',
    component: () =>
        import ( /*webpackChunkName: "bili"*/ '../views/bili/compute')
},
{
    path: '/rili',
    name: 'rili',
    component: () =>
        import ( /*webpackChunkName: "bili"*/ '../views/Home')
}
]

const router = new VueRouter({
    mode: 'hash',
    scrollBehavior:()=>{
        y:0
    },
    routes
})

export default router


// {
//     path: '/Admin',
//     name: 'Admin',
//     component: () =>
//     import ( /* webpackChunkName: "Admin" */ '../views/Admin.vue')
// }