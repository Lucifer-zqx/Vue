<template>
  <div>
    <h1>尚硅谷学员列表</h1>
    <input type="text" v-model="personInfo" />
    <button @click="addPerson">添加</button><br>
    <button @click="addPersonOfWang">添加王姓人员</button><br>
    
    <h4 :style="{color:'red'}">Count组件的和为：{{count}}</h4>
    <h4>第一个人为：{{firstPerson}}</h4>
    <ul>
        <li v-for="p in persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
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
          //要想访问模块中的mutations，就需要加上模块名
          this.$store.commit("personAbout/ADDPERSON",person)
          this.personInfo=''
      },
      addPersonOfWang(){
          const person = {id:nanoid(),name:this.personInfo}
          //要想访问模块中的mutations，就需要加上模块名
          this.$store.dispatch("personAbout/addPersonOfWang",person)
          this.personInfo=''
      }
  },
  computed:{
      count(){
          //state中不在直接是要取的数据，而是多了一层模块名
          return this.$store.state.countAbout.count
      },
      persons(){
          return this.$store.state.personAbout.persons
      },
      firstPerson(){
          //对象属性名中含有特殊字符，可以用[]的方式获取属性值
          return this.$store.getters['personAbout/firstPerson']
      }
  },
  mounted(){
      // console.log(this.$store)
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