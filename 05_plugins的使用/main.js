/*入口文件 */
import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'
Vue.config.productionTip = false

//使用插件的同时可以传入参数，install函数默认第一个是Vue，后面的就是传入的
Vue.use(plugins,1,2,3,4)

new Vue({
  render: h => h(App),
}).$mount('#app')
