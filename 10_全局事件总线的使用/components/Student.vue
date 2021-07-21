<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
      <button @click="submitName">点我向父组件提交名字</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'张三',
            age:18
        }
    },
    methods:{
        submitName(){
            this.$bus.$emit('recieveName',this.name,this.age)
        },
    },
    

}
</script>

<style>

</style>