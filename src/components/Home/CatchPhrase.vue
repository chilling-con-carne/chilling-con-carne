<template>
<div class="h-screen flex flex-col gap-4 lg:gap-12 justify-center items-center w-3/4 lg:w-1/2 m-auto text-black">
    <h1 class="text-xl md:text-4xl lg:text-6xl font-black" >{{ $t('home.catch.beginning') }}<e class="text-yellow-400">{{ $t('home.catch.amazing') }}</e></h1>
    <p class="md:text-xl lg:text-3xl">{{ $t('home.catch.middle') }}</p>
    <div class="w-16 lg:w-32 h-1 lg:h-2 bg-cyan-500 rounded-full"></div>
    <p class="md:text-xl lg:text-3xl">{{ $t('home.catch.end') }}</p>
</div>
</template>

<script setup lang="ts">
/*
    Not needed but otherwise typescript and the IDE cry :(
*/
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const $t = t;
</script>