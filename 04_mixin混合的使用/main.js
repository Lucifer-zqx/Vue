/*入口文件 */
import Vue from 'vue'
import App from './App.vue'
import mixin from './mixin'
Vue.config.productionTip = false
//配置全局混合
Vue.mixin(mixin)

new Vue({
  render: h => h(App),
}).$mount('#app')
