<template>
  <ul class="todo-main">
    <Item v-for="(item,index) in todos"
          :todo="item"
          :key="item.id"
          :updataStatus="updataStatus"
          :index="index"
          :deleteItem="deleteItem"
    />
  </ul>
</template>

<script>
import Item from "@components/Item";

export default {
  props: {
    todos: {
      type: Array,
      redirected: true
    },
    updataStatus:{
      type:Function,
      redirected: true
    },
    deleteItem:{
      type:Function,
      redirected:true
    }
  },
  data() {
    return {}
  },
  components: {
    Item
  }
}
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