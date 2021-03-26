<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllEnd"/>
    </label>
    <span>
          <span>已完成{{ endTodo.length }}</span> / 全部{{ this.todos.length }}
        </span>
    <button class="btn btn-danger" @click="clearEndTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      redirected: true
    },
    checkAll: {
      type: Function,
      redirected: true
    },
    clearEndTodo:{
      type: Function,
      redirected: true
    }

  },
  data() {
    return {}
  },

  computed: {
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

  },
  methods:{
  }
}
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