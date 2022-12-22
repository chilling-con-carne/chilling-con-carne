<template>
<div class="card xl:card-side bg-base-100 shadow-xl md:w-96 lg:w-96 xl:w-auto m-auto">
    <figure class="bg-gradient-to-r from-orange-400 to-red-600">
        <img class="rounded-xl md:rounded-b-none xl:rounded-r-none w-52 md:w-96 lg:w-96 h-52 md:h-full translate-y-6 md:translate-y-0 md:object-cover" 
            :src="imageUrl" 
            alt="picture" 
        >
    </figure>
    <div class="card-body gap-1 lg:gap-16 md:mt-4 p-10">
        <h1 class="text-cyan-700 text-lg lg:text-2xl">{{ about.name }} / {{ about.position }}</h1>
        <h3 class="italic text-sm lg:text-lg">{{ about.line }}</h3>
        <p class="text-left lg:text-lg">{{ about.description }}</p>
        <ul class="flex flex-row gap-2">
            <li>
            <a :href="about.linkedin">
                <img
                src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
                alt="LinkedIn"
                title="LinkedIn"
                width="20"
                />
            </a>
            </li>
            <li>
            <a :href="about.github">
                <img
                src="https://unpkg.com/simple-icons@latest/icons/github.svg"
                alt="Github"
                title="Github"
                width="20"
                />
            </a>
            </li>
      </ul>
    </div>
</div>
</template>

<script setup lang="ts">
import { About } from '../../types';
const {about} = defineProps<{about: About}>();

const imageUrl = new URL(`../../assets/about/${about.picture}`, import.meta.url).href

</script>

<style></style>