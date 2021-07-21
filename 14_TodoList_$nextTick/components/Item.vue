<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        :value="todo.title"
        type="text"
        @blur="handleBlur(todo, $event)"
        ref="inputBox"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit">编辑</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo"],
  methods: {
    handleCheck(todoId) {
      this.$bus.$emit("sender", todoId);
    },
    deleteTodo(todoId) {
      if (confirm("确认删除吗？")) {
        // this.removeTodo(this.todoId)
        this.$bus.$emit("removeTodo", todoId);
      }
    },
    handleEdit() {
      if(this.todo.hasOwnProperty('isEdit')){
        this.todo.isEdit = true
      }else{
        this.$set(this.todo, "isEdit", true);
      }

      //Vue要等把代码更新完毕后，才渲染模板，所以如果直接想要真实DOM获取焦点，此时模板还未更新完，则不成功
      //$nextTick API作用就是等模板渲染完毕后执行回调，适用于渲染模板时，需要用到执行后的数据结果
      //其实用定时器也可以，因为浏览器的事件循环模型，必须要等初始代码执行完毕，才执行回调
      this.$nextTick(function(){
        this.$refs.inputBox.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>