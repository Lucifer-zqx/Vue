<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- router-link的replace属性，操作浏览器历史记录，直接替换掉栈顶的记录 -->
        <router-link
          :to="{
            name: 'Details',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          replace
        >
          {{ m.title }}
        </router-link>
        <button @click="myPush(m)">push查看</button>
        <button @click="myReplace(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  methods: {
    myPush(m) {
      //编程式路由导航，操作浏览器history的方法在$router对象的隐式原型上
      this.$router.push({
        name: "Details",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    myReplace(m) {
      //编程式路由导航，操作浏览器history的方法在$router对象的隐式原型上
      this.$router.replace({
        name: "Details",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>