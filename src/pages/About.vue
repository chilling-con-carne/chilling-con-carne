<template>
    <section class="h-screen">
        <Title title="We’re designers, developers, and builders making great things" top-off-set="40%">
             <strong class="text-cyan-500 font-normal"> happen</strong>
        </Title>
        <Chevrons href="#about-content" />
    </section>
    <section id="about-content" class="m-auto w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-2 md:gap-8 mb-24 scroll-mt-24">
        <AboutPortrait v-for="about in abouts" :key="about.name" :about="about" />
    </section>
</template>

<script setup lang="ts">
import Title from '../components/Misc/Title.vue';
import Chevrons from '../components/Misc/Chevrons.vue';
import AboutPortrait from '../components/About/AboutPortrait.vue';

import {About} from '../types';

import { reactive, defineAsyncComponent } from "vue";

let abouts = reactive<Array<About>>([
  {
    name: "Vincent WENDLING",
    position: "co-founder - ceo",
    line: "Software engineer during the day, meme lord at night",
    description:
      "As students, we often develop skills that we can't use at their full potential until we graduated and find a job. With ChillingConCarne, we aspire to use our talents not only to meet our clients' expectations, but hopefully to exceed them. Our team members are versatile and we've got every skill needed to turn your idea into reality.",
    picture: "logo.png",
    linkedin: "https://www.linkedin.com/in/vincent-wendling-5a939a1b7/",
    github: "https://github.com/TisaneFruitRouge",
  },
  {
    name: "Germain EGUINA",
    position: "co-founder - fullstack dev",
    line: "Wise, Smart & versatile",
    description:
      "I am 20 years old and I am from the Central African Republic. Currently studying computer engineering in Strasbourg, I have developed a versatility in development and programming. I like to spend time on a subject that interests me and new technologies and computer science itself are great passions.",
    picture: "logo.png",
    linkedin: "https://www.linkedin.com/in/germain-eguina-4bab70220/",
    github: "https://github.com/kiLLuua",
  },
  {
    name: "Eden KHAROUB",
    position: "co-founder - designer",
    line: "Cat enthusiast with a passion for detail.",
    description:
      "I’m a frontend engineer passionate about graphic design and data visualisation. I like playing piano, cooking, gardening, and just trying every possible art medium known to man. I love learning new things and my coworkers like to say I have an unhealthy obsession with reading documentation. I currently am in a five-year integrated masters degree course studying computer science, focusing primarily on graphics programming, VR, and game interaction.",
    picture: "../../assets/about/eden.webp",
    linkedin: "https://fr.linkedin.com/in/eden-kharoub-6a9958187",
    github: "https://github.com/Kokoden",
  },
  {
    name: "Léandre BLANCHEGELEY",
    position: "co-founder - backend dev",
    line: "Manliest man you've ever met",
    description:
      "I am a 20 years old student at 42 School and a technology lover, I thrive on innovating and discovering new things. As a back end programmer, exploring the depth of systems and building their architecture is one of my many skills.",
    picture: "leandre.webp",
    linkedin: "https://www.linkedin.com/in/l%C3%A9andre-blanchegeley-618152224/",
    github: "https://github.com/SanGoruden",
  },
]);

</script>

<style>
    
</style>