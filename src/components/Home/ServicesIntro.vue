<template>
<div class="mb-[15vh] text-black flex flex-col gap-4 w-3/4 md:w-2/3 lg:w-1/2 m-auto">
    <h1 class="text-xl md:text-4xl lg:text-6xl font-black">We want to help you make an impact. Here's how: </h1>
    <ol class="flex flex-col gap-2 md:gap-6 mt-10">
        <li><ServiceItem title="Web design 💄" :services="['Modern, attractive and fully responsive', 'Mobile & Web Apps', 'UI Prototyping']" /></li>
        <li><ServiceItem title="Web development 💻" :services="['Robust, secure, mordern and built with the latest technologies', 'Frontend / backend development', 'Q/A Testing']" /></li>
        <li><ServiceItem title="Branding 💼" :services="['Your fully customized website fitting your brand', 'Logo design and brand image ', 'Corporate Identity']" /></li>
    </ol>
    <router-link class="link link-hover link-primary flex justify-center items-center gap-2 italic md:text-lg lg:text-xl" to="/services">
        Learn more
    </router-link>
</div>
</template>

<script setup lang="ts">
import ServiceItem from './ServiceItem.vue';
</script>

<style scoped>

</style>