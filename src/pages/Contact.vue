<template>
    <div class="w-[90%] md:w-2/3 lg:w-1/2 m-auto mt-[8vh] h-screen flex flex-col justify-center gap-8 p-4 mb-24 mt-24 md:mt-0">
        <h1 class="text-xl md:text-3xl">{{ t('contact.touch') }}</h1>
        <form @submit.prevent="sendMessage" class="flex flex-col shadow-xl gap-4 p-4">
            <h2 class="text-sm md:text-xl italic">{{ t('contact.message') }}</h2>
            <input v-model="name" type="text" :placeholder="t('contact.form.name')" class="md:text-lg mx-4 border-b border-solid border-cyan-300">
            <input v-model="email" type="email" :placeholder="t('contact.form.email')" class="md:text-lg mx-4 border-b border-solid border-cyan-300">
            <textarea v-model="body" :placeholder="t('contact.form.message')" class="md:text-lg mx-4 border-b border-solid border-cyan-300" rows="5"></textarea>
            <button class="btn btn-accent btn-sm md:btn-md lg:btn-lg">{{ t('contact.form.button') }}</button>
        </form>
        <div class="divider">{{ t('contact.divider') }}</div>
        <h1>{{ t('contact.email') }} <a href="mailto:chillingconcarne.pro@gmail.com" class="font-semibold text-cyan-500">chillingconcarne.pro@gmail.com</a></h1>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const sendMessage = () => {
    //TODO
}

const name = ref('');
const email = ref('');
const body = ref('') 

</script>

<style>
</style>