<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isDoneAll"/>
    </label>
    <span>
          <span>已完成{{ doneItem }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" v-if="showDoneAll" @click="clearDoneAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    todos: {
      type: Array,
      redirect: true
    },
    showDoneAllItem: {
      type: Function,
      redirect: true
    },
    clearDoneAll: {
      type: Function,
      redirect: true
    }
  },
  mounted() {
    console.log(this.showDoneAll)
  },
  computed: {
    doneItem() {
      return this.todos.filter(item => {
        return item.status === true
      }).length
    },
    showDoneAll: {
      get() {
        return this.todos.length && this.doneItem
      }
    },
    isDoneAll: {
      get() {
        return this.todos.length === this.doneItem && this.todos.length
      },
      set(newValue) {
        console.log(newValue)
        this.showDoneAllItem(newValue)
      }
    },
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