<template>
    <section>
        <ul class="list-group">
            <li class="list-group-item" v-for="(schedule, index) in propsdata" :key="schedule">
                {{ schedule }}
            <button class="btn btn-warning" v-on:click="removeTodo(schedule, index)">삭제</button>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    methods : {
      removeTodo(schedule, index) {
        this.$emit('removeTodo', schedule, index);
        }
    }
}
</script>

<style>
</style>
