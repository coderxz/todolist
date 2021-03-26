<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos"
            :updataStatus="updataStatus"
            :deleteItem="deleteItem"
      />
      <Footer :todos="todos"
              :checkAll="checkAll"
              :clearEndTodo="clearEndTodo"
      />
    </div>
  </div>
</template>

<script>
import Footer from "@components/Footer";
import Header from "@components/Header";
import List from "@components/List";

export default {
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    setTimeout(() => {
          this.todos = JSON.parse(localStorage.getItem('todo_key') || '[]')
        },
        1000)
  },
  components: {
    Footer,
    Header,
    List
  },
  methods: {
    //更新状态
    updataStatus(value, todos) {
      todos.status = value
    },
    //添加事务
    addTodo(newTodo) {
      this.todos.unshift(newTodo)
    },
    //全选全不选
    checkAll(isTodoEnd) {
      this.todos.forEach(item => {
        item.status = isTodoEnd
      })
    },
    //删除某一项
    deleteItem(index) {
      this.todos.splice(index, 1)
    },
    clearEndTodo() {
      this.todos = this.todos.filter(item => {
        return item.status === false
      })
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: function (value) {
        localStorage.setItem('todo_key', JSON.stringify(value))
      }
    }
  }
}
</script>

<style scoped>
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