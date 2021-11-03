<template>
  <div class="app">
    <form action="/" method="get">
      <dropdownList />
      <buttons-option />
    </form>
  </div>
</template>

<script>
import dropdownList from "./components/dropdownList.vue"
import buttonsOption from "./components/buttonsOption.vue";

export default {
  name: "app",
  components: {
    dropdownList,
    buttonsOption,
  },
};
</script>
