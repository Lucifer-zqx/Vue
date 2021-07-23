//引入vue-router
import VueRouter from "vue-router"

//引入Home路由组件
import Home from '../pages/Home.vue'

//引入About路由组件
import About from '../pages/About.vue'

//引入新闻组件
import News from '../pages/News.vue'

//引入消息组件
import Message from '../pages/Message.vue'

//引入详情组件
import Details from '../pages/Details.vue'

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
            children:[
                {
                    //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                    name:'News',
                    path:'news',
                    component:News
                },
                {
                    //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                    name:'Message',
                    path:'Message',
                    component:Message,
                    children:[
                        {
                            //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                            name:'Details',
                            path:'details',
                            component:Details
                        }
                    ]
                }
            ]
        },
    ]
})