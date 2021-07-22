<template>
  <div class="row">
    <div v-show='info.users.length' class="card" v-for='user in info.users' :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>

    <div v-show='info.isFirst'>
      <h1>欢迎使用</h1>
    </div>

    <div v-show='info.isLoading'>
      <h1>正在加载。。。</h1>
    </div>
    <div v-show='info.errorMsg'>
      <h1>{{info.errorMsg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return {
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errorMsg:''
      }
    }
  },
  methods:{
    getUsers(info){
      this.info = {...this.info,...info}
    }
  },
  mounted(){
    this.$bus.$on('userCollections',this.getUsers)
  }
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>