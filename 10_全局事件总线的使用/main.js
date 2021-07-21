/*入口文件 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    //声明全局事件总线,本质就是个vm实例对象，所以任何vc都可以通过原型链找到这个事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
