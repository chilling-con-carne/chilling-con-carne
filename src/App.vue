<template>
<Navbar />
<router-view></router-view>
<Footer />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<style>
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
