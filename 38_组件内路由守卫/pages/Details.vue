<template>
  <div class="details">
      <ul >
          <!-- <li>消息编号:{{$route.params.id}}</li>
          <li>消息标题:{{$route.params.title}}</li> -->
          <li>消息编号:{{id}}</li>
          <li>消息标题:{{title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Details',
    props:['id','title'],
    mounted(){
        // console.log(this)
    }
}
</script>

<style>
    .details{
        background-color: bisque;
        margin-top: 20px;
    }
</style>