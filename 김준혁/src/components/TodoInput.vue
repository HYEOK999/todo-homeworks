<template>
    <div>
        <!-- v-on:keyup.enter 엔터를 누를경우 addTodo메서드 발생 -->
        <input type="text" v-model="InputSchedule" placeholder="할일을 적으시오." v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
export default {
    data : function(){
        return{
            InputSchedule: ''
        }
    },
    methods:{
        addTodo(){
            if (this.InputSchedule !== "") {
                var value = this.InputSchedule && this.InputSchedule.trim();
				this.$emit('addTodo', value)
                this.clearInput();
            }
        }
    },
}
</script>

<style>

</style>
