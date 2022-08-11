<template>
    <section class="h-screen">
        <HomeTitle/>
        <Chevrons href="#home-page-content"/>
    </section>
    <section id="home-page-content">
        <CatchPhrase />
        <ServicesIntro />
    </section>
</template>

<script setup lang="ts">
import HomeTitle from '../components/Home/HomeTitle.vue';
import Chevrons from '../components/Misc/Chevrons.vue';
import CatchPhrase from '../components/Home/CatchPhrase.vue';
import ServicesIntro from '../components/Home/ServicesIntro.vue';
</script>

<style>
</style>