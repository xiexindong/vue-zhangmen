import Modal from './extend.vue'
import Vue from 'vue'

const VueModal = Vue.extend(Modal)


function modalAlert(modalObj = {}) {
        let vm = new VueModal({
        el: document.createElement('div'),
        data: {
          title: modalObj.title,
          message: modalObj.message,
          type: modalObj.type,
          visible: true
        },
        methods: {
          doClose() {
            vm.visible = false //修改变量
            document.body.removeChild(vm.$el) //从body中移除
            vm.$destroy() //销毁
            vm = null //垃圾回收
            modalObj.callback &&
              typeof modalObj.callback === 'function' &&
              modalObj.callback()
          }
        }
      })
      document.body.appendChild(vm.$el)
}
    // 挂载到vue原型上
Vue.prototype.$modalAlert = modalAlert
  

export default modalAlert
