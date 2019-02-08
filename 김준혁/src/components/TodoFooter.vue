<template>
    <div>
        <button v-on:click="clearTodo">전체 지우기</button>
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

</style>
