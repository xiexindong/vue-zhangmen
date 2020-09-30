/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import DetailCard  from '../views/DetailCard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/DetailCard',
    name: 'DetailCard',
    component: DetailCard
}]

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