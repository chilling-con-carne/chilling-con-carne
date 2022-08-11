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
                desc: 'Ipsum eu tempor duis velit reprehenderit esse reprehenderit ea laborum tempor voluptate. Incididunt aute irure amet enim nulla in laboris et et aliquip pariatur labore anim commodo. Eiusmod sint laborum occaecat incididunt sit incididunt labore ea. Aliqua',
            },
            {
                title: 'Mobile & Web Apps',
                desc: 'Nisi deserunt ea ipsum sit velit ipsum id tempor ipsum esse. Eiusmod ullamco nisi esse do ad dolor pariatur. Officia consequat voluptate Lorem elit minim ex dolor. Nulla sit anim velit amet sit sunt laborum. Est anim dolor labore ea incididunt officia fugiat elit quis.'
            },
            {
                title: 'UI Prototyping',
                desc: 'Sint dolor ea pariatur adipisicing eiusmod ipsum labore aute laboris cupidatat sint nulla. Laborum sit dolor dolore consequat laboris aliqua enim exercitation enim exercitation qui. Sint labore et incididunt dolor.'
            }
        ]
    },
    {
        title: 'Web development',
        desc: 'Minim ea dolore eu qui ut incididunt cillum sint consequat ipsum veniam. Ea amet laborum sit amet amet nisi cupidatat cupidatat labore mollit Lorem do. Est in sint qui nulla duis aliquip cillum cupidatat occaecat laborum cupidatat veniam. Commodo ex mollit eu nostrud veniam sunt elit amet adipisicing aliqua non.',
        subservices: [
            {
                title: 'Robust, modern & secure',
                desc: 'Ullamco ullamco commodo anim mollit qui amet non. Officia cillum incididunt nulla adipisicing eu ea commodo duis. Eiusmod ea in velit et commodo cillum do. Duis cillum amet adipisicing dolore fugiat.',
            },
            {
                title: 'Frontend & Backend',
                desc: 'Dolore Lorem nulla deserunt consequat proident ut tempor id. Mollit et dolor aute do nostrud do fugiat incididunt et irure eiusmod non. Sit eiusmod excepteur excepteur dolore magna cillum sunt sit fugiat proident proident qui.'
            },
            {
                title: 'Q/A Testing',
                desc: 'Laboris eiusmod laboris deserunt occaecat dolore laboris aute magna est duis do. Officia ut sint eu ut cillum aliquip est amet in tempor. Ex sint ea aliquip eu. Nisi incididunt voluptate anim adipisicing veniam pariatur dolor minim magna pariatur tempor irure ut velit.'
            }
        ],
    },
    {
        title: 'Branding',
        desc: 'Do id enim excepteur dolore eiusmod tempor occaecat nulla. Duis cillum pariatur id qui aliquip proident eu veniam laboris quis veniam et quis proident. Eiusmod cillum magna excepteur aliqua pariatur in anim do ullamco fugiat. Ex cupidatat mollit ut aliqua elit in dolore Lorem in. Ullamco consectetur eu dolore aliqua. Aliqua nisi exercitation quis fugiat ullamco. Dolore in fugiat adipisicing nisi sit minim velit nostrud cupidatat consequat.',
        subservices: [
            {
                title: 'A website fitting your brand',
                desc: 'Aliquip qui laboris nostrud consequat occaecat sit ad ad est irure consectetur Lorem. Quis dolore aliqua nulla consequat do Lorem dolore dolor ad deserunt. Sint est veniam ex cillum consectetur aute. Et irure dolor Lorem pariatur aliqua minim duis. Ullamco irure laborum ea reprehenderit aliquip quis. Tempor ullamco ipsum ut pariatur cillum ullamco pariatur. Magna do consectetur est tempor dolore consectetur.'
            },
            {
                title: 'Logo design & brand image',
                desc: 'Consequat aute non sint aliqua dolor ipsum consectetur mollit excepteur magna ut tempor. Et fugiat consectetur ipsum do officia. Laborum nostrud minim irure aliqua consequat enim reprehenderit adipisicing consectetur. Magna nostrud nisi commodo officia magna in laboris dolore consequat irure. Quis esse excepteur culpa enim voluptate est deserunt cillum. Consequat qui anim excepteur ullamco mollit nostrud laborum tempor magna.'
            },
            {
                title: 'Corporate Identity',
                desc: 'Labore magna ullamco consectetur dolore eu proident fugiat esse est occaecat amet nostrud excepteur. Dolor enim reprehenderit occaecat ullamco ut nostrud nisi. Nisi Lorem Lorem enim id labore dolore excepteur aliquip est enim velit proident ex. Aliqua amet sit ea sunt proident labore. Quis adipisicing duis aliquip do nisi aliqua in laborum magna eu sunt.'
            }
        ]
    }
]

</script>

<style>
    
</style>