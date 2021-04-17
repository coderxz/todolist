<template>
  <ul class="todo-main">
    <Item v-for="(item,index) in todos" :todos="item" :key="item.id" :index="index" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
import Item from "@components/Item";
export default {
  name: "List",
  props:{
    todos:{
      type:Array,
      redirect:true
    },
    deleteItem:{
      type:Function,
      redirect: true
    }
  },
  mounted() {
    console.log(this.todos)
  },
  components:{
    Item
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
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