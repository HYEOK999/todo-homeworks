<template>
    <section>
        <ul>
            <li v-for="(schedule, index) in propsdata" :key="schedule">
                {{ schedule }}
            <button v-on:click="removeTodo(schedule, index)">삭제</button>
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
