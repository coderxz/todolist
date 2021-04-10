<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
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

  },
  components: {
    Footer,
    Header,
    List
  },
  methods: {

  },
  watch: {

  },
  computed:{

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