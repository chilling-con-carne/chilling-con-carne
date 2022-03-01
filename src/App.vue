<template>
  <TheNavbar></TheNavbar>
  <router-view/>
</template>

<script setup>
  
  import TheNavbar from '@/components/TheNavbar.vue'
 
</script>

<style lang="scss">

:root {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
