<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header ref="header"/>
      <List :todos="todos"
      />
      <Footer>
      <input type="checkbox" v-model="isAllEnd" slot="left"/>
      <span slot="middle">
      <span>已完成{{ endTodo.length }}</span> / 全部{{ this.todos.length }}
      </span>
      <button class="btn btn-danger" @click="clearEndTodo" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@components/Footer";
import Header from "@components/Header";
import List from "@components/List";
import pubsub from 'pubsub-js'



export default {
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.$refs.header.$on('addTodo',this.addTodo)
    this.$bus.$on('deleteItem',this.deleteItem)
    setTimeout(() => {
          this.todos = JSON.parse(localStorage.getItem('todo_key') || '[]')
        },
        1000)
    var token = pubsub.subscribe('UPSTATE',this.updataStatus)
  },
  components: {
    Footer,
    Header,
    List
  },
  methods: {
    //更新状态
    updataStatus(msg,values) {
      console.log(values);
      values.todo.status = values.isCheck
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
  },
  computed:{
        endTodo: {
      get() {
        return this.todos.filter(item => {
          return item.status === true
        })
      }
    },
    isAllEnd: {
      get() {
        return this.todos.length === this.endTodo.length && this.endTodo.length > 0
      },
      set(value) {
        this.checkAll(value)
      }
    },
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