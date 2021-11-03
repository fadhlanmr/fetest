<template>
    <div class="app">
        <form action="/" method='get'>
            <dropdown />
        </form>
    </div>
</template>

<script>
import Dropdown from './components/dropdown.vue'
export default {
    name: 'app',
    components: {
        Dropdown
    }
}
</script>

<style>

</style>