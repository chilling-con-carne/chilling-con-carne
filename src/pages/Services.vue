<template>
    <section class="h-screen">
        <Title title="We offer key services such as">
            <strong class="text-cyan-500 font-normal">web design</strong>,
            <strong class="text-cyan-500 font-normal">
                web development,
            </strong> and <strong class="text-cyan-500 font-normal">branding</strong>
        </Title>
        <Chevrons href="#services-content" />
    </section>
    <section id="services-content" class="m-auto w-3/4 md:w-2/3 lg:w-1/2 text-black flex flex-col gap-16 mb-24 scroll-mt-24">
        <Service v-for="service in services" :service="service" :key="service.title" />
    </section>    
</template>

<script setup lang="ts">
import Title from '../components/Misc/Title.vue';
import Chevrons from '../components/Misc/Chevrons.vue';
import Service from '../components/Services/Service.vue';

import {Service as ServiceType} from '../types'

const services:Array<ServiceType> = [
    {
        title: 'Web design',
        desc: 'Right now, at the age of the Internet, your online presence is part of what defines you as a person or as a company. You cannot afford looking bad online. This is where we step in for you. We can design your online presence to make you look attractive to everyone.',
        subservices: [
            {
                title: 'Modern & attractive',
                desc: 'Modern and attractive design reflecting your company\'s brand and values, following the principles of good web design.',
            },
            {
                title: 'Mobile & Web Apps',
                desc: 'More than half of the internet traffic is done on mobile. You can trust that our designs will look as good on mobile as on any device.'
            },
            {
                title: 'UI Prototyping',
                desc: 'Fully tested ans user approved User Interfaces (UI).'
            }
        ]
    },
    {
        title: 'Web development',
        desc: 'Our team of software developpers will provide you high quality websites and apps, using the lastest, most cutting edge technologies. We will take care of the development, deployment and maintenance of your project.',
        subservices: [
            {
                title: 'Robust, modern & secure',
                desc: 'Using the lastest technologies, trusted by companies around the world, you can be certain that your website will be secure, modern and robust.',
            },
            {
                title: 'Frontend & Backend',
                desc: 'We will take care of both the frontend and the backend. With us, you can expect a all-in-one website, fully adapted to your needs.'
            },
            {
                title: 'Q/A Testing',
                desc: 'By testing our product continuously, we\'ll make sure it meets the highest standards in order to deliver to you a flawless website.'
            }
        ],
    },
    {
        title: 'Branding',
        desc: 'Your brand is more than just a logo or name. It’s who you are as a company at a very fundamental level. We can help you with any aspect you might be struggling with, whether you need to create a brand identity from scratch or simply find a better way to communicate your core messaging and company values through compelling graphic design.',
        subservices: [
            {
                title: 'A website fitting your brand',
                desc: 'First impressions matter most. We’ll help you create a website that will convey to your customers your company’s message. From logos, typefaces and colour schemes- we’ll make sure your website reflects you.'
            },
            {
                title: 'Logo design & brand image',
                desc:'We’ll create a strong logo design that will represent a high-level view into the core values of your company. We’ll come up with a brand design principle you can use as a style guide for your employees to follow.'
            },
            {
                title: 'Corporate Identity',
                desc: 'Having a strong image convinces prospective customers to buy from your business over the competition. We’re here to help you identify what your company stands for, what are its core values, and package those values in a website that resonates with your audience.'
            }
        ]
    }
]

</script>

<style>
    
</style>