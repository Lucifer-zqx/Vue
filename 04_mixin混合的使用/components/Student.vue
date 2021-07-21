<template>
  <div>
    <h2>{{ x }}</h2>
    <h2>{{ y }}</h2>
    <button @click="hello">说你好</button>
  </div>
</template>

<script>
// import mixin from "../mixin";
export default {
  name: "Student",
  /* data(){
      return{
          x:100,
          y:200
      }
  },
  methods:{
      hello(){
          alert('hello')
      }
  } */
  //定义一个局部混合，是数组
//   mixins:[mixin]
};
</script>

<style>
</style>