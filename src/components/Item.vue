<template>
  <li @mouseenter="mouseMove(true)" @mouseleave="mouseMove(false)" ref="mouseLiItem">
    <label>
      <input type="checkbox" v-model="todos.status"/>
      <span>{{todos.title}}</span>
    </label>
    <button class="btn btn-danger" style="display: none" ref="btnItem" @click="deleteItem(index)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:{
    todos:{
      type:Object,
      redirect:true
    },
    deleteItem:{
      type:Function,
      redirect: true
    },
    index:{
      type:Number,
      redirect:true
    }
  },
  data(){
    return {

    }
  },
  mounted() {
    console.log(this.deleteItem)
  },
  methods:{
    mouseMove(flag){
      if (flag){
        this.$refs.mouseLiItem.style.backgroundColor = '#eee'
        this.$refs.btnItem.style.display = 'block'
      }else{
        this.$refs.mouseLiItem.style.backgroundColor = '#fff'
        this.$refs.btnItem.style.display = 'none'
      }
    }
  }
}
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
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>