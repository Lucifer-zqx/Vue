<template>
  <div>
    <School  />
    <!-- props属性标签传入的都是字符串格式，要想使用变量，请使用v-bind：转为js表达式 -->
    <Student name="张三" />
    <!-- <Student name="张三" :age='18' /> -->
    <button @click="show">点我查看当前VC组件实例属性</button>
  </div>
</template>

<script>
//引入组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student,School
  },
  data(){
    return {
      school:'尚硅谷'
    }
  },
  methods:{
    show(){
      console.log(this.$children[1])
    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
