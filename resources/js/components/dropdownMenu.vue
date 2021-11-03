<template>
    <div class="dropdownMenu">
        <div class="col-auto" v-for="pipes in pipe" :key="pipes.id">
            <li><a class="dropdown-item" href="#">
                {{ pipes.Product_type }}
            </a></li>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    export default {
        name: "dropdownMenu",
        mounted() {
            //console.log(this.$store.dispatch('search/loadPipe'));
            this.$store.dispatch('pipe/loadPipe');
        },
        computed: {
            ...mapState("pipe", ["pipe"])
        }
    }
</script>

<style lang="css" scoped>
    @import "../../css/app.css";
</style>