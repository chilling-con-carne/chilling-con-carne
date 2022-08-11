import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import Services from './pages/Services.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home, 
        },
        {
            path: '/about',
            component: About, 
        },
        {
            path: '/services',
            component: Services, 
        },
        {
          path: '/contact',
          component: Contact,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },    
});