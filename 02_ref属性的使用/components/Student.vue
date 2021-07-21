<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
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
    /* mounted(){
        console.log('@',this)
    } */
    methods:{
        showAlert(){
            alert('我是student组件的方法，我被调用了')
        }
    }
}
</script>

<style>

</style>