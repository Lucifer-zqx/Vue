<template>
  <div>
    <h1>当前求和为{{ count }}</h1>
    <h4>上面的值放大10倍为:{{ multiplyTen }}</h4>
    <h4 :style="{ color: 'red' }">Person组件的人数为:{{ persons.length }}</h4>
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
    //在四个api前面添加模块属性名,就完成了vuex的模块化
    ...mapMutations("countAbout", {
      increment: "INCREMENT",
      decrement: "DECREMENT",
    }),

    ...mapActions("countAbout", {
      incrementOdd: "incrementOdd",
      incrementWait: "incrementWait",
    }),
  },
  computed: {
    //在四个api前面添加模块属性名,就完成了vuex的模块化
    ...mapState("countAbout", ["count"]),
    ...mapState("personAbout", ["persons"]),

    ...mapGetters("countAbout", ["multiplyTen"]),
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style>
button {
  margin-left: 4px;
}
</style>