<template>
  <div>
    <h1>
      {{school}}
    </h1>
    <Student/>
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
