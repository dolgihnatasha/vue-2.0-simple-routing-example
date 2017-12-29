<template>

  <main class="container-fluid">
    <v-navbar/>
    <slot></slot>
  </main>
</template>

<script>
  import VLink from '../components/VLink.vue';
  import VNavbar from '../components/VNavbar.vue';

  export default {
    components: {
      VLink,
      VNavbar
    }
  }
</script>

<style scoped>
  html {
    position: relative;
    min-height: 100%;
  }
  body {
    padding-top: 3.5rem;
  }
</style>
