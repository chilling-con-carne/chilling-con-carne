<template>
    <section class="h-screen">
        <Title :title="t('services.title')">
            <strong class="text-cyan-500 font-normal">{{ t('services.service1') }}</strong>,
            <strong class="text-cyan-500 font-normal">
                {{ t('services.service2') }},
            </strong> {{ t('services.and') }} <strong class="text-cyan-500 font-normal">{{ t('services.service3') }}</strong>
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

import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const services = computed(() => {
    return [
        {
            title: t('services.services.design.title'),
            desc: t('services.services.design.desc'),
            subservices: [
                {
                    title: t('services.services.design.subservices.1.title'),
                    desc: t('services.services.design.subservices.1.desc'),
                },
                {
                    title: t('services.services.design.subservices.2.title'),
                    desc: t('services.services.design.subservices.2.desc'),
                },
                {
                    title: t('services.services.design.subservices.3.title'),
                    desc: t('services.services.design.subservices.3.desc'),
                }
            ]
        },
        {
            title: t('services.services.development.title'),
            desc: t('services.services.development.desc'),
            subservices: [
                {
                    title: t('services.services.development.subservices.1.title'),
                    desc: t('services.services.development.subservices.1.desc'),
                },
                {
                    title: t('services.services.development.subservices.2.title'),
                    desc: t('services.services.development.subservices.2.desc'),
                },
                {
                    title: t('services.services.development.subservices.3.title'),
                    desc: t('services.services.development.subservices.3.desc'),
                }
            ]
        },
        {
            title: t('services.services.branding.title'),
            desc: t('services.services.branding.desc'),
            subservices: [
                {
                    title: t('services.services.branding.subservices.1.title'),
                    desc: t('services.services.branding.subservices.1.desc'),
                },
                {
                    title: t('services.services.branding.subservices.2.title'),
                    desc: t('services.services.branding.subservices.2.desc'),
                },
                {
                    title: t('services.services.branding.subservices.3.title'),
                    desc: t('services.services.branding.subservices.3.desc'),
                }
            ]
        }
    ]
});

</script>

<style>
    
</style>