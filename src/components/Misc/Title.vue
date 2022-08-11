<template>
<h1 :class="`absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 text-3xl md:text-5xl xl:text-7xl`">
    {{ props.title }}
    <slot></slot>
</h1>
</template>

<script setup lang="ts">

const props = defineProps<{title: string}>();

</script>

<style></style>