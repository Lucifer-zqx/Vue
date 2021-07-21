<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="submitName">点我向父组件提交名字</button>
      <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:'张三',
            age:18
        }
    },
    methods:{
        submitName(){
            this.$emit('recieveName',this.name)
        },
       
        unbind(){
            //单事件解绑
            this.$off('recieveName')
            //多事件解绑
            // this.$off(['recieveName'])
            //全部事件解绑
            // this.$off()

            /**
             * 自定义事件销毁时机：
             * 1.自己主动解绑事件
             * 2.组件自身被卸载
             * 3.父组件被卸载
             */
        }
    },
    

}
</script>

<style>

</style>