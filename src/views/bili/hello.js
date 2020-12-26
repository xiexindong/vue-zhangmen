import Vue from "vue"
import ExtendTemplate from "./extend"

console.log('ExtendTemplate',ExtendTemplate)

// 使用extend方法创建vue的子类
const ExtendConstructor = Vue.extend(ExtendTemplate)

console.log('ExtendConstructor',ExtendConstructor)

function ExtendCom (options = {}){
    if(typeof options === 'string'){
        options = {
            text: options
        }
    }

      // 实例化子组件，然后获取到DOM结构并挂载到body上
      const extendInstence =  new ExtendConstructor({ data: options })
      console.log('ExtendInstence',ExtendInstence)
      extendInstence.vm = extendInstence.$mount()
      console.log('ExtendInstence.vm',ExtendInstence.vm)
      document.body.appendChild(helloInstence.vm.$el);
}

export default ExtendCom;