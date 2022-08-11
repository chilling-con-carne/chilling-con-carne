<template>
<div class="card lg:card-side bg-base-100 shadow-xl pt-2">
    <figure><img class="rounded-xl w-52 lg:w-96" :src="imageUrl" alt="picture" ></figure>
    <div class="card-body gap-4 lg:gap-16">
        <h1 class="text-cyan-700 text-lg lg:text-2xl">{{ about.name }} / {{ about.position }}</h1>
        <h3 class="underline lg:text-xl">{{ about.line }}</h3>
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