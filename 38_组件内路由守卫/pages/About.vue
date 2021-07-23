<template>
  <div>
    <h2>About组件下的内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",

  //通过路由规则 **进入**组件被调用 时间点：即将进入到路由组件内
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("atguigu") === "atguigu") {
      next();
    } else {
      alert("组件内路由守卫觉得你不行");
    }
  },

  //通过路由规则 **离开**组件被调用 时间点：将要离开该路由组件
  beforeRouteLeave(to,form,next) {
    console.log('即将离开About组件')
    next()
  },
};
</script>

