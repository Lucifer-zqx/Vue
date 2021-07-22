<template>
  <div>
    <h1>当前求和为{{ count }}</h1>
    <h4>上面的值放大10倍为:{{ multiplyTen }}</h4> 
    <h4 :style="{color:'red'}">Person组件的人数为:{{ persons.length }}</h4>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">加</button>
    <button @click="decrement(n)">减</button>
    <button @click="incrementOdd(n)">奇数加</button>
    <button @click="incrementWait(n)">等一会儿加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    //对象属性名为使用的方法名，属性值为vuex中对应的mutations方法名
    //新的方法需要传递value给muatations中方法的value
    ...mapMutations({ increment: "INCREMENT",decrement:"DECREMENT" }),
    // ...mapMutations(['INCREMENT',"DECREMENT"]),
    ...mapActions({incrementOdd:"incrementOdd",incrementWait:'incrementWait'})
    // ...mapActions(['incrementOdd','incrementWait'])
    

  },
  computed: {

    // ...mapState({count:"count"}) //传入的对象，属性名为，计算属性的方法名，值为state中的哪个状态
    ...mapState(["count",'persons']), //数组的元素既作为计算属性的值，也标识着state的哪个具体状态

    // ...mapGetters({multiplyTen:"multiplyTen"}),
    ...mapGetters(["multiplyTen"]),

  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
button {
  margin-left: 4px;
}
</style>