<style scoped>
</style>

<template>
<ul>
    <li v-for="task in tasks">
    {{task}}
    </li>
</ul>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
           tasks: [
            'a', 'b','c'
           ]
        }
    },
    props: {
    },
}
</script>