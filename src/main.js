import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import modalAlert from "./views/bili/modalAlert"

Vue.use(ElementUI)
Vue.use(modalAlert)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
