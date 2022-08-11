<template>
    <a class="absolute bottom-[10%]" :href="href"><img class="animate-bounce" :src="Chevron" alt="chevron"></a>
</template>

<script setup lang="ts">
import Chevron from '../../assets/chevron-double-down.png';

const props = defineProps<{href: string}>();

</script>