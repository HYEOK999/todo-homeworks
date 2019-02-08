<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'

export default {
  data: function(){
    return{
      schedules: []
  }
},
  methods: {
      addTodo(schedule) {
			localStorage.setItem(schedule, schedule);
			this.schedules.push(schedule);
		},
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
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
