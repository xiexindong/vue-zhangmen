/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'About',
    component: About
}, {
    path: '/Home',
    name: 'Home',
    component: () =>
    import ( /* webpackChunkName: "home" */ '../views/Home.vue')
}, {
    path: '/Admin',
    name: 'Admin',
    component: () =>
    import ( /* webpackChunkName: "Admin" */ '../views/Admin.vue')
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router