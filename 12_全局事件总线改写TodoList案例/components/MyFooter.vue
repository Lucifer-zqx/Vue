<template>
  <div class="todo-footer" v-show="totalTodos">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span> <span>已完成{{doneTodos}}</span> / 全部{{totalTodos}} </span>
    <button class="btn btn-danger" @click="sweep"> 清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos','isCheckedAll','sweepCompletedTodo'],
  computed:{
    totalTodos(){
      return this.todos.length
    },
    doneTodos(){
      return this.todos.filter(todo => todo.done === true).length
    },
    isAll:{
      get(){
        return this.totalTodos === this.doneTodos && this.totalTodos !== 0
      },
      //通过双向数据绑定实现此功能
      set(value){
        this.$emit('isCheckedAll',value)
      }

    }
  },
  methods:{
    sweep(){
      this.$emit('sweepCompletedTodo')
    }
  }
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>