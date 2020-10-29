/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
// import DetailCard  from '../views/DetailCard.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/DetailCard',
    name: 'DetailCard',
    component: () =>
        import ( /*webpackChunkName: "Admin"*/ '../views/DetailCard.vue')
} , {
    path: '/parement',
    name: 'Parement',
    component: () =>
        import ( /*webpackChunkName: "parement"*/ '../views/customCom/parement.vue')
},
 {
    path: '/picker',
    name: 'picker',
    component: () =>
        import ( /*webpackChunkName: "Moment"*/ '../views/picker/DatePicker2')
},

// {
//     path: '/moment',
//     name: 'moment',
//     component: () =>
//         import ( /*webpackChunkName: "Moment"*/ '../views/moment')
// }
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