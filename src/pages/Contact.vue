<template>
    <div class="w-[90%] md:w-2/3 lg:w-1/2 m-auto mt-[8vh] h-screen flex flex-col justify-center gap-8 p-4 mb-24">
        <h1 class="text-xl md:text-3xl">👋 Let's get in touch !</h1>
        <form @submit.prevent="sendMessage" class="flex flex-col shadow-xl gap-4 p-4">
            <h2 class="text-sm md:text-xl italic">Send us a message (we'll read it, promise 🤞)</h2>
            <input v-model="name" type="text" placeholder="Your name" class="md:text-lg mx-4 border-b border-solid border-cyan-300">
            <input v-model="email" type="email" placeholder="Your email" class="md:text-lg mx-4 border-b border-solid border-cyan-300">
            <textarea v-model="body" placeholder="Your message" class="md:text-lg mx-4 border-b border-solid border-cyan-300" rows="5"></textarea>
            <button class="btn btn-accent btn-sm md:btn-md lg:btn-lg">Send</button>
        </form>
        <div class="divider">OR</div>
        <h1>Send an email at <a href="mailto:chillingconcarne.pro@gmail.com" class="font-semibold text-cyan-500">chillingconcarne.pro@gmail.com</a></h1>
    </div>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sendMessage = () => {
    //TODO
}

const name = ref('');
const email = ref('');
const body = ref('') 

</script>

<style>
</style>