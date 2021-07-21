<template>
  <div>
    <School  />
    <Student  />
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
