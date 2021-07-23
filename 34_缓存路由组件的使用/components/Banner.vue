<template>
<div>
  <h1>路由使用案例</h1>
  <button @click="back">后退</button>
  <button @click="forward">前进</button>
  <button @click="test">测试一下go</button>
</div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(){
      //正数代表前进，负数代表后退
      this.$router.go(-2)
    }
  }
};
</script>

<style>
</style>