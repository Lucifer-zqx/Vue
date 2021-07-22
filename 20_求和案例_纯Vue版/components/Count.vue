<template>
  <div>
    <h1>当前求和为{{count}}</h1>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
    <button @click="incrementOdd">奇数加</button>
    <button @click="incrementWait">等一会儿加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n:1,
      count:0
    };
  },
  methods:{
    increment(){
      this.count = this.count + this.n
    },
    decrement(){
      this.count = this.count - this.n
    },
    incrementOdd(){
      if(this.count % 2){
        this.count = this.count + this.n
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.count = this.count + this.n
      },500)
    },
  }

};
</script>

<style>
button{
  margin-left:4px ;
}
</style>