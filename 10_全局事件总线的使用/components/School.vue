<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    methods:{
        recieveName(name,age){
            console.log('school组件收到的参数为：',name,age)
        }       
    },
    mounted(){
        //收参数的组件，是需要绑定自定义事件，也就是给总线对象绑定一个回调函数
        // this.__proto__.__proto__上存在$bus属性
        this.$bus.$on('recieveName',this.recieveName)
    },
    beforeDestroy(){
        //组件销毁前，最好给绑定自定义事件解绑
        this.$bus.$off('recieveName')
    }
    

}
</script>

<style>

</style>