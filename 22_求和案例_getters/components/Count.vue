<template>
  <div>
    <h1>当前求和为{{$store.state.count}}</h1>
    <h4>上面的值放大10倍为:{{$store.getters.multiplyTen}}</h4>
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
      //直接与mutations对话
      this.$store.commit('INCREMENT',this.n) 
    },
    decrement(){
      //直接与mutations对话
      this.$store.commit('DECREMENT',this.n)
    },
    incrementOdd(){
      //业务逻辑，不放在组件中，而是由action产生(与action对话)
      this.$store.dispatch("incrementOdd",this.n)
    },
    incrementWait(){
      //业务逻辑，不放在组件中，而是由action产生(与action对话)
        this.$store.dispatch("incrementWait",this.n)
    },
  },
  mounted(){
    console.log(this)
  }

};
</script>

<style>
button{
  margin-left:4px ;
}
</style>