<template>
    <div class="flex flex-col items-start gap-4 p-4 border-2 border-solid border-cyan-500 rounded-xl shadow-xl shadow-cyan-100
                hover:bg-cyan-500 hover:text-white hover:-translate-x-2 hover:-translate-y-2 duration-300">
        <h2 class="text-md md:text-lg lg:text-xl font-bold">{{ subservice.title }}</h2>
        <p class="text-left text-sm md:text-md lg:text-lg">{{ subservice.desc }}</p>
    </div>
</template>

<script setup lang="ts">
import { Subservice } from '../../types';

const {subservice} = defineProps<{subservice: Subservice}>();
</script>

<style></style>