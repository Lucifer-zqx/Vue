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
const router =  new VueRouter({
    //配置路由器的模式，hash模式和history模式
    mode:'hash',
    routes:[
        {
            path:'/about',
            component:About,
            //元数据，一般是存放程序员的数据
            meta:{title:'关于'}
        },
        {
            path:'/home',
            component:Home,
            meta:{title:'首页'},
            children:[
                {
                    //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                    name:'News',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'}
                },
                {
                    //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                    name:'Message',
                    path:'Message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            //给路由命名，寻找路由路径时，可以直接通过名称匹配到该路径的路由，适用于较深嵌套的路由
                            name:'Details',
                            //params参数接参形式
                            path:'details/:id/:title',
                            meta:{title:'详情'},
                            component:Details,
                            //way1:通过对象，将数据传递给detail组件：只能传固定数据，且是在组件内声明接受，跟普通的组件props传参没有区别
                            // props:{id:'001',title:'消息1'}

                            //way2:props的值为布尔值，就会把路径收集到的params参数传递给组件的props属性
                            // props:true

                            //way3:函数形式,参数可以接到$route属性.可以把params参数或者query参数收集到props中传递给组件
                            props($route){
                                return {
                                    id:$route.params.id,
                                    title:$route.params.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ],
    
})

//全局路由守卫（前置守卫）。时间点：进入路由组件之前,回调函数被调用
//to：到哪去
//from：从哪来
//next：是否放行的开关
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.getItem('atguigu') === 'atguigu'){
            next()
        }else{
            alert('学校不正确')
        }
    }else{
        next()
    }
})

//全局后置守卫： 时间点：进入路由组件之后
router.afterEach((to,from,next)=>{
    document.title = to.meta.title || '硅谷系统'
})


export default router