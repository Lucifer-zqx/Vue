<template>
  <div>
    <h1>尚硅谷学员列表</h1>
    <input type="text" v-model="personInfo" />
    <button @click="addPerson">添加</button>
    <h4 :style="{color:'red'}">Count组件的和为：{{count}}</h4>
    <ul>
        <li v-for="p in persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import {mapState} from 'vuex'
export default {
  name: "Person",
  data() {
    return {
      personInfo: "",
    };
  },
  methods:{
      addPerson(){
          const person = {id:nanoid(),name:this.personInfo}
          this.$store.commit("ADDPERSON",person)
          this.personInfo=''
      }
  },
  computed:{
      ...mapState(['persons',"count"])
  }

};
</script>

<style>
ul{
    width: 200px;
    height: 200px;
    background-color: bisque;
    margin-top:20px;
}
</style>