<template>
<Title :title="$t('home.title')">
    <span class="text-cyan-400">{{ typedText }}</span>
    <span :class="`inline-block w-0.5 h-1/2 align-bottom bg-black cursor ${typeStatus ? 'typing' : ''} `">&nbsp;</span>
</Title>
</template>

<script lang="ts" setup>
import Title from '../Misc/Title.vue';

import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const typedText = ref("");
const typeStatus = ref(false);
const services = [t('home.examples.1'), t('home.examples.2'), t('home.examples.3'), t('home.examples.4'), t('home.examples.5')];
const typingSpeed = 100;
const erasingSpeed = 50;
const newTextDelay = 1000;
let typeArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
    if(charIndex < services[typeArrayIndex].length) {
        if(!typeStatus.value)
            typeStatus.value = true;
        
        typedText.value += services[typeArrayIndex].charAt(charIndex);
        charIndex += 1;
          
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus.value = false;
         setTimeout(eraseText, newTextDelay);
    }
}

const eraseText = () => {
    if(charIndex > 0) {
        if(!typeStatus.value)
            typeStatus.value = true;
        
        typedText.value = services[typeArrayIndex].substring(0, charIndex - 1);
        charIndex -= 1;
        
        setTimeout(eraseText, erasingSpeed);
        
    } else {
        typeStatus.value = false;
        typeArrayIndex += 1;
            
        if(typeArrayIndex >= services.length)
            typeArrayIndex = 0;
            
        setTimeout(typeText, typingSpeed + 1000);
    }
}

onMounted(() => {
    setTimeout(typeText, newTextDelay + 200);    
});
</script>

<style>

span.cursor {
    animation: cursorBlink 1s infinite;
}
span.cursor.typing {
    animation: none;
}

@keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
}
</style>



