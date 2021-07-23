/*入口文件 */
import Vue from 'vue'
import App from './App.vue'
//引入vueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
Vue.config.productionTip = false


Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

