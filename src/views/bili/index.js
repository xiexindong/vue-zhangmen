import Vue from 'vue'
import Component from './extend'

const Constructor = Vue.extend(Component)

console.log('constructor',Constructor)

const uploadOSS = (creator) => {
  const UploadCom = new Constructor({
    el: document.createElement('div'),
    data() {
      return {
        creator
      }
    }
  })
  document.body.appendChild(UploadCom.$el)
}
export default uploadOSS
