<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :reciever="reciever" />
      <MyList :todos="todos" :sender="sender" :removeTodo="removeTodo" />
      <MyFooter
        :todos="todos"
        :isCheckedAll="isCheckedAll"
        :sweepCompletedTodo="sweepCompletedTodo"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: { MyHeader, MyFooter, MyList },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    reciever(val) {
      this.todos.unshift(val);
    },
    sender(todoId) {
      const todo = this.todos.find((todo) => todo.id === todoId);
      todo.done = !todo.done;
    },
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    //全选操作
    isCheckedAll(doneFlag) {
      this.todos = this.todos.map((todo) => {
        todo.done = doneFlag;
        return todo;
      });
    },
    //清除已完成任务
    sweepCompletedTodo() {
      this.todos = this.todos.filter((todo) => todo.done !== true);
    },
  },

  //监视todos发生的变化，完成存储功能
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
