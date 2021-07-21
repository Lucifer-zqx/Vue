<template>
  <div>
    <h1>
      {{school}}
    </h1>
    <!-- 通过ref锚点的组件标签，可以拿到vc实例对象上的全部属性 -->
    <Student ref='student' />
    <button @click='showVC'>点我展示</button>
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
    showVC(){
      console.log(this.$refs.student.showAlert())
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
