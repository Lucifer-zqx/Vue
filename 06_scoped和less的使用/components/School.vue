<template>
  <div class="school">
      <h2>{{name}}</h2>
      <h2>{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'尚硅谷',
            address:'北京昌平'
        }
    },
}
</script>

<style scoped>
    .school{
        background-color: aqua;
    }
</style>