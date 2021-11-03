<template>
    <div class="dropdownList container-md" style="width: 75%">
        <div class="row">
        <div class="card col-3 col-md p-2 m-2">
            <div class="card-title">
                Product Type
            </div>
            <div class="dropdown">
            <button type="button" class="btn row card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <dropdowmMenu />
            </ul>
            </div>
        </div>
        <div class="card col-3 col-md p-2 m-2">
            <div class="card-title">
                Grade
            </div>
            <div class="dropdown">
            <button type="button" class="btn row card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <dropdowmMenu />
            </ul>
            </div>
        </div>
        <div class="card col-3 col-md p-2 m-2">
            <div class="card-title">
                Size
            </div>
            <div class="dropdown">
            <button type="button" class="btn row card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <dropdowmMenu />
            </ul>
            </div>
        </div>
        <div class="card col-3 col-md p-2 m-2">
            <div class="card-title">
                Connection
            </div>
            <div class="dropdown">
            <button type="button" class="btn row card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    All
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <dropdowmMenu />
            </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import dropdowmMenu from './dropdownMenu.vue';
    export default {
        name: "dropdownList",
        components: {
            dropdowmMenu
        },
    }
</script>

<style lang="css" scoped>
    @import "../../css/app.css";
</style>