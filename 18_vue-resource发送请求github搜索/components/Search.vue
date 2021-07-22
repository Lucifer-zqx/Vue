<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    searchUsers(){
      this.$bus.$emit('userCollections',{isFirst:false,isLoading:true})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(response=>{
        // console.log(response.data)
        this.$bus.$emit('userCollections',{users:response.data.items,isLoading:false})
      },error=>{
        // console.log(error.message)
        this.$bus.$emit('userCollections',{errorMsg:error.message,isLoading:false,users:[]})
      })
    }
  }
};
</script>
