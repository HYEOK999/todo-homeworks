<template>
    <div>
        <button id='a' type="button" class="btn btn-outline-danger" v-on:click="clearTodo">전체 지우기</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            this.$emit('removeAll');
        }
    },
}
</script>

<style>
#a{margin-top: 10px}
</style>
