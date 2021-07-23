//引入vue-router
import VueRouter from "vue-router";
//引入Home路由组件
import Home from '../pages/Home.vue'
//引入About路由组件
import About from '../pages/About.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
        },
    ]
})