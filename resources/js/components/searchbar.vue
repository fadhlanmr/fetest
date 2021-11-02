<template>
    <div class="container" style="width: 75%;">
        <div class="row justify-content-center">
            <div class="card col-3 col-md p-2 m-2">
                <div class="card-title">
                    Type
                </div>
                <div type="button" class="btn card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ALL
                </div>
            </div>
            <div class="card col-3 col-md p-2 m-2">
                <div class="card-title">
                    Grade
                </div>
                <div type="button" class="btn card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ALL
                </div>
            </div>
            <div class="card col-3 col-md p-2 m-2">
                <div class="card-title">
                    Size
                </div>
                <div type="button" class="btn card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ALL
                </div>
            </div>
            <div class="card col-3 col-md p-2 m-2">
                <div class="card-title">
                    Connection
                </div>
                <div type="button" class="btn card-text dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    ALL
                </div>
            </div>
            <div type="button" class="card btn btn-warning justify-content-center col-1 col-sm-1 p-1 m-2 active">
                <i class="fa fa-search card-img-top p-2" style="color:black"></i>
                <div class="card-title">
                    Find
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>

</style>