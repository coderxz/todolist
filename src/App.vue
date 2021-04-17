<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodoItem="addTodoItem"/>
      <List :todos="todos" :deleteItem="deleteItem"/>
      <Footer :todos="todos" :showDoneAllItem="showDoneAllItem" :clearDoneAll="clearDoneAll"/>
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
      todos: [
        {
          id: 'qweqw1112',
          status: true,
          title: 'A事件'
        },
        {
          id: 'qweq1we1112',
          status: false,
          title: 'B事件'
        },
        {
          id: 'qweqw1e112',
          status: false,
          title: 'C事件'
        }
      ]
    }
  },
  mounted() {

  },
  components: {
    Footer,
    Header,
    List
  },
  methods: {
    deleteItem(index) {
      this.todos.splice(index, 1)
    },
    addTodoItem(todo) {
      this.todos.unshift(todo)
    },
    showDoneAllItem(flag) {
      this.todos.forEach(item => {
        item.status = flag
      })
    },
    clearDoneAll() {
      this.todos = this.todos.filter(item => {
        return item.status === false
      })
    }

  },
  watch: {},
  computed: {}
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