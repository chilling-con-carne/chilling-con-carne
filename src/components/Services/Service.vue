<template>
    <div class="flex flex-col gap-8">
      <h1 class="text-3xl md:text-4xl font-semibold">{{ service.title }}</h1>
      <p class="text-md md:text-lg lg:text-xl text-left">{{ service.desc }}</p>
      <ol class="flex flex-col gap-4">
        <li v-for="subservice in service.subservices" :key="subservice.title">
            <Subservice :subservice="subservice" />
        </li>
      </ol>  
    </div>
</template>

<script setup lang="ts">
import { Service } from '../../types';
import Subservice from './Subservice.vue';

const {service} = defineProps<{service: Service}>();

</script>

<style scoped>
</style>