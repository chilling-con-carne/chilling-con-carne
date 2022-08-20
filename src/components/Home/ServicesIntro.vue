<template>
<div class="mb-[15vh] text-black flex flex-col gap-4 w-3/4 md:w-2/3 lg:w-1/2 m-auto">
    <h1 class="text-xl md:text-4xl lg:text-6xl font-black">{{ $t('home.services.title') }}</h1>
    <ol class="flex flex-col gap-2 md:gap-6 mt-10">
        <li><ServiceItem :title="$t('home.services.design.title')" :services="[$t('home.services.design.services.1'),$t('home.services.design.services.2'),$t('home.services.design.services.3')]" /></li>
        <li><ServiceItem :title="$t('home.services.development.title')" :services="[$t('home.services.development.services.1'),$t('home.services.development.services.2'),$t('home.services.development.services.3')]" /></li>
        <li><ServiceItem :title="$t('home.services.branding.title')" :services="[$t('home.services.branding.services.1'),$t('home.services.branding.services.2'),$t('home.services.branding.services.3')]" /></li>
    </ol>
    <router-link class="link link-hover link-primary flex justify-center items-center gap-2 italic md:text-lg lg:text-xl" to="/services">
        {{ $t('home.services.learn') }}
    </router-link>
</div>
</template>

<script setup lang="ts">
import ServiceItem from './ServiceItem.vue';
/*
    Not needed but otherwise typescript and the IDE cry :(
*/
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const $t = t;
</script>

<style scoped>

</style>