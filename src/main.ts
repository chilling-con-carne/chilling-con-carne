import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'
import router from './router'

import navbarEN from './assets/i18n/navbar/navbarEN.json';
import navbarFR from './assets/i18n/navbar/navbarFR.json';
import homeEN from './assets/i18n/home/homeEN.json';
import homeFR from './assets/i18n/home/homeFR.json';
import aboutEN from './assets/i18n/about/aboutEN.json';
import aboutFR from './assets/i18n/about/aboutFR.json';
import servicesEN from './assets/i18n/services/servicesEN.json';
import servicesFR from './assets/i18n/services/servicesFR.json';

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    messages: {
        en: {
            navbar: navbarEN,
            home: homeEN,
            about: aboutEN,
            services: servicesEN
        },
        fr: {
            navbar: navbarFR,
            home: homeFR,
            about: aboutFR,
            services: servicesFR
        }
    }
});


createApp(App).use(router).use(i18n).mount('#app')
