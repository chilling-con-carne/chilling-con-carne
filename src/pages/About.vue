<template>
    <section class="h-screen">
        <Title :title="t('about.title')" top-off-set="40%">
             <strong class="text-cyan-500 font-normal">{{ t('about.strong') }}</strong>
        </Title>
        <Chevrons href="#about-content" />
    </section>
    <section id="about-content" class="m-auto w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-12 lg:gap-24  mb-24 scroll-mt-24">
        <AboutPortrait v-for="about in abouts" :key="about.name" :about="about" />
    </section>
</template>

<script lang="ts" setup>
import Title from '../components/Misc/Title.vue';
import Chevrons from '../components/Misc/Chevrons.vue';
import AboutPortrait from '../components/About/AboutPortrait.vue';

import {About} from '../types';

import { computed, reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const abouts = computed(() => {
  return [
    {
      name: "Vincent WENDLING",
      position: t('about.abouts.vincent.position'),
      line: t('about.abouts.vincent.line'),
      description: t('about.abouts.vincent.description'),
      picture: "logo.png",
      linkedin: "https://www.linkedin.com/in/vincent-wendling-5a939a1b7/",
      github: "https://github.com/TisaneFruitRouge",
    },
    {
      name: "Germain EGUINA",
      position: t('about.abouts.germain.position'),
      line: t('about.abouts.germain.line'),
      description: t('about.abouts.germain.description'),
      picture: "germain.webp",
      linkedin: "https://www.linkedin.com/in/germain-eguina-4bab70220/",
      github: "https://github.com/kiLLuua",
    },
    {
      name: "Léandre BLANCHEGELEY",
      position: t('about.abouts.leandre.position'),
      line: t('about.abouts.leandre.line'),
      description: t('about.abouts.leandre.description'),
      picture: "leandre.webp",
      linkedin: "https://www.linkedin.com/in/l%C3%A9andre-blanchegeley-618152224/",
      github: "https://github.com/SanGoruden",
    },
  ];
});

</script>

<style>
    
</style>