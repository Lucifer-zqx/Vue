<template>
  <div>
    <Test />
    <Test1/> 
    <Test2/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test1 from './components/Test1.vue'
import Test2 from './components/Test2.vue'
export default {
  name: "App",
  components: {Test,Test1,Test2},
};
</script>

<style>
</style>
