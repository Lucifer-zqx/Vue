<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{age}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    /* data(){
        return {
            name:'张三',
            age:18
        }
    }, */
    /**props的简写方式 */
    // props:['name','age']

    /**对props的内容进行简单限制，不匹配就会爆错 
    props:{
        name:String,
        age:Number
    }
    */


// 最完整写法：
   props:{
       name:{
           type:String,
           require:true
       },
       age:{
           type:Number,
           default:100
       }
   }
}
</script>

<style>

</style>