<template>
  <div>
    <h2>Home组件下的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 路由链接 -->
          <!-- 使用名称匹配路由 -->
          <router-link
            class="list-group-item"
            active-class="active"
            :to="{name:'News'}"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 路由组件插入的位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

