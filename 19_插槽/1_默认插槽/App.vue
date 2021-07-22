<template>
  <div class="wrapper">
    <Category title="美食">
      <ul >
        <li v-for="food,index in foods" :key="index">
          {{food}}
        </li>
      </ul>
    </Category>

    <Category title="游戏">
      <ul >
        <li v-for="game,index in games" :key="index">
          {{game}}
        </li>
      </ul>
    </Category>

    <Category title="电影">
      <ul >
        <li v-for="movie,index in movies" :key="index">
          {{movie}}
        </li>
      </ul>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: "App",
  components: { Category },
  data(){
    return{
      foods:['烧烤','啤酒','小龙虾'],
      games:['LOL','QQ飞车','CF'],
      movies:['致青春','我的兄弟叫顺溜','误杀']
    }
  }
};
</script>
<style lang="css">
  .wrapper{
    display: flex;
    justify-content: space-around;
  }
</style>