<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  /* mounted(){
   this.timer = setInterval(()=>{
       this.opacity -= 0.01
			 if(this.opacity <= 0) this.opacity = 1
    },6)
  },
  beforeDestroy(){
    console.log("我要被销毁了")
    clearInterval(this.timer)
  } */

  /* 业务场景：当组件需要当做缓存路由组件时，这时组件就不会被销毁触发beforeDestroy钩子,
  但我们又需要在其中做一些业务，如清空定时器等。。。引出路由组件两个新钩子actived和Deactived */

  //路由组件特有的生命周期钩子，在进入路由组件时
  activated() {
    this.timer = setInterval(() => {
      console.log("@@@")
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 60);
  },

  //离开路由组件时
  deactivated() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>