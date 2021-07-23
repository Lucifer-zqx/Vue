<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <!-- query参数路由传参 -->
        <!-- 使用名称匹配路由 -->
        <router-link
          :to="{
            name: 'Details',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
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
};
</script>

<style>
</style>