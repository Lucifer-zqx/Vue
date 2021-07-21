<template>
  <ul class="todo-main">
    <Item 
    v-for="p in todos" :key='p.id' 
    :todoId='p.id' 
    :title='p.title' 
    :done="p.done"
    :sender='sender'
    :removeTodo='removeTodo'
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "MyList",
  components: {
    Item,
  },
  props:['todos','sender','removeTodo']
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>