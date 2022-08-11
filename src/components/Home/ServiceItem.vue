<template>
    <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <h2 class="collapse-title text-lg md:text-3xl font-black">{{props.title}}</h2>
        <ol class="collapse-content">
            <div class="divider"></div> 
            <li v-for="(service) in props.services" :key="service">
                <p class="text-md md:text-xl">{{service}}</p>
                <div class="divider"></div> 
            </li>
        </ol>
    </div>
</template>


<script setup lang="ts">
const props = defineProps<
    {
        title: string, 
        services:Array<string>
    }>();
</script>