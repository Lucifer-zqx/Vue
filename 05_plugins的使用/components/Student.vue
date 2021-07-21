<template>
  <div>
    <h2>{{ x }}</h2>
    <h2>{{ y }}</h2>
    <button @click="hello">说你好</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
      return{
          x:100,
          y:200
      }
  },
  methods:{
      hello(){
          alert('hello')
      }
  }
};
</script>

<style>
</style>