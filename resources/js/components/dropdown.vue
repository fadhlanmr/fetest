<template>
    <div class="card col-3 col-md p-2 m-2">
        <div class="card-title col-9">
            {{ search.search_select }}
        </div>
        <div class="card-text col-3">
            {{ search.search_qty }}
        </div>
    </div>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: "dropdownList",
        components: {

        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>

</style>