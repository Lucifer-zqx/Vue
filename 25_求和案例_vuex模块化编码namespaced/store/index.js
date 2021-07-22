import Vue from 'vue'
import Vuex from 'vuex'
//count组件模块
import countAbout from './count'
//person组件模块
import personAbout from './person'
//使用vuex插件
Vue.use(Vuex)

//通过Vuex.Store生成store实例对象
export default new Vuex.Store({
    // 通过modules暴露模块
    modules:{
        countAbout,
        personAbout
    }
})