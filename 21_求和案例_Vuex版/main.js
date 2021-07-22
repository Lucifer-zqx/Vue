/*入口文件 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

//下方传入的store在任何一个组件中都可以看到，（猜测应该 是加到Vue.prototype上了）
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

