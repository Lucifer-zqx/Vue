<template>
  <div>
    <h1>
      {{school}}
    </h1>
    <!-- 第一种自定义事件的方式 -->
    <!-- <Student @recieveName='recieveName'/> -->

    <!-- 第二种自定义事件的方式 -->
    <!-- <Student v-on:recieveName='recieveName'/> -->

    <!-- 第三种自定义事件的方式-->
    <!-- 给组件绑定的事件统统为自定义事件,要想绑定原生DOM事件加native修饰 -->
    <!-- 事件修饰符对于自定义事件仍然有效，但是第三种方法自定义事件，需要用$once来绑定事件-->
    <!-- <Student ref="student" @click.native="hello"/>  -->
    <Student ref="student" /> 
  </div>
</template>

<script>
//引入组件
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
  data(){
    return {
      school:'尚硅谷'
    }
  },
  methods:{
    recieveName(name){
      console.log('被触发了',name)
    },
    hello(){
      alert('hello')
    }
  },
  mounted(){
    this.$refs.student.$on('recieveName',this.recieveName)
  }
}
</script>

<style>

</style>
