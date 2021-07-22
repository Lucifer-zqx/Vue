<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <!-- 插槽位置 通过插槽的属性向上递交数据-->
    <slot :foods="foods" ></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  //使用的数据在子组件，但是展现数据的结构却由父组件决定，此时应该使用作用域插槽
  data() {
    return {
      foods: ["烧烤", "啤酒", "小龙虾"],
    };
  },
};
</script>

<style>
.container {
  background-color: aquamarine;
  width: 200px;
}
</style>