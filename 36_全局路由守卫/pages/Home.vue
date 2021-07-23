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
            :to="{ name: 'News' }"
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
      <!-- 缓存路由组件 -->
      <!-- 因为路由组件在切换时换被销毁，所以销毁之后的所有数据都不能够保存，所以当想要路由组件切换不被销毁，就可以配置缓存路由组件 -->
      <!-- include写组件名，或组件名数组 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

