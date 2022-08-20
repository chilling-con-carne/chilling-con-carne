import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'
import router from './router'

import navbarEN from './assets/i18n/navbar/navbarEN.json';
import navbarFR from './assets/i18n/navbar/navbarFR.json';
import footerEN from './assets/i18n/footer/footerEN.json';
import footerFR from './assets/i18n/footer/footerFR.json';

import homeEN from './assets/i18n/home/homeEN.json';
import homeFR from './assets/i18n/home/homeFR.json';
import aboutEN from './assets/i18n/about/aboutEN.json';
import aboutFR from './assets/i18n/about/aboutFR.json';
import servicesEN from './assets/i18n/services/servicesEN.json';
import servicesFR from './assets/i18n/services/servicesFR.json';
import contactEN from './assets/i18n/contact/contactEN.json';
import contactFR from './assets/i18n/contact/contactFR.json';

const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: {
        en: {
            navbar: navbarEN,
            footer: footerEN,
            home: homeEN,
            about: aboutEN,
            services: servicesEN,
            contact: contactEN
        },
        fr: {
            navbar: navbarFR,
            footer: footerFR,
            home: homeFR,
            about: aboutFR,
            services: servicesFR,
            contact: contactFR
        }
    }
});


createApp(App).use(router).use(i18n).mount('#app')
