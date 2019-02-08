<template>
  <div id="app">
    <TodoHeader></TodoHeader>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'

export default {
  data: function(){
    return{
      scasular: []
  }
},
  methods: {
  },
  components: {
    'TodoHeader' : TodoHeader,
  },
}
</script>

<style>
 body {
    text-align: center;
    background-color: rgb(247, 247, 255); 
    /*
    text-align -> 중앙정렬
    background-color -> 화면 전체 배경색 
    */
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>
