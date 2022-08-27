<template>
<nav id="navbar" :class="`z-20 fixed top-0 md:top-4 left-1/2 -translate-x-1/2 flex w-full md:w-2/3 lg:w-1/2 h-12 items-center justify-around px-4 gap-4 
                          text-sm md:text-xl duration-300 md:rounded-full md:shadow-xl md:shadow-slate-300
                          ${topOfPage ? '' : 'bg-cyan-500 md:shadow-cyan-100'} `">
  <router-link to="/">{{ t('navbar.home') }}</router-link>
  <router-link to="/about">{{ t('navbar.about') }}</router-link>
  <router-link to="/services">{{ t('navbar.services') }}</router-link>
  <router-link to="/contact">{{ t('navbar.contact') }}</router-link>
</nav>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const topOfPage = ref(true);

const handleScroll = () => {
  if(window.pageYOffset>window.innerHeight*0.1){
    if(topOfPage.value) topOfPage.value = false
  } else {
    if(!topOfPage.value) topOfPage.value = true
  }
}


onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll);
});

const { t } = useI18n();

</script>

<style scoped>
</style>