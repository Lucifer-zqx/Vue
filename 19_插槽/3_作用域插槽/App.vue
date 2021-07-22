<template>
  <div class="wrapper">
    <Category title="美食">
      <!-- 通过template的scope属性，接受插槽传递来的数据 ，传递过来的是包含数据的对象，需要进一步处理-->
      <template scope="{foods}">
          <ul>
            <li v-for="(food, index) in foods" :key="index">
              {{ food }}
            </li>
          </ul>
          <h2 slot="footer">您想吃点啥</h2>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>
<style lang="css">
.wrapper {
  display: flex;
  justify-content: space-around;
}
</style>