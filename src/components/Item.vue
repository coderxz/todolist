<template>
  <li @mouseenter="mouseISEnter(true)"
      @mouseleave="mouseISEnter(false)"
      ref="listyle"
  >
    <label>
      <input type="checkbox" v-model="todoStatus"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem(index)">删除</button>
  </li>
</template>

<script>
export default {
  props:{
    todo:{
      type:Object,
      redirected:true
    },
    updataStatus:{
      type:Function,
      redirected: true
    },
    index:{
      type:Number,
      redirected:true
    },
    deleteItem:{
      type:Function,
      redirected:true
    }
  },
  data(){
    return{
      isShow:false
    }
  },
  computed:{
    todoStatus:{
      get(){
        return this.todo.status
      },
      set(value){
        this.updataStatus(value,this.todo)
      }
    }
  },
  methods:{
    mouseISEnter(isEnter){
      if (isEnter){
        //移入逻辑
        this.isShow = true
        this.$refs.listyle.style='background-color: rgba(0,0,0,.1);'
      }else{
        //移除逻辑
        this.isShow = false
        this.$refs.listyle.style='#fff'
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