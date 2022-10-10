<style scoped>

</style>

<template>
    <div class="navbar">
        Navbar / {{foo}}
        {{inputter}}
        <button name="1" @click="handleClick">
        TEST
        </button>
    </div>
</template>

<script>
export default {
    name: 'NavBar',

    data() {
        return {
            foo: 'bar',
        }
    },

    components: {

    },
    props: {
        inputter: Number,
    },
    methods: {
        handleClick(e) {
            this.$router.push('/about')
            console.log(e.target.name);
        }
    }
}
</script>