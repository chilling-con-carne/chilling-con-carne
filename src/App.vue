<template>
  <TheNavbar></TheNavbar>
  <router-view />
</template>

<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap");

:root {
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  margin: 0;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
