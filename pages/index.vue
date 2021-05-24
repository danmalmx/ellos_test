<template>
    <Home />
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '../components/HomePage.vue'

export default Vue.extend({
  components: {
    Home
  },
  props: ['products']
})
</script>

<style>

</style>
