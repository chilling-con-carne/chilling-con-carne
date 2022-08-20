import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./pages/Home.vue'), 
        },
        {
            path: '/about',
            component: () => import('./pages/About.vue'), 
        },
        {
            path: '/services',
            component: () => import('./pages/Services.vue'), 
        },
        {
          path: '/contact',
          component: () => import('./pages/Contact.vue'),
        },
        {
          path:'/cookie-policy',
          component: () => import('./pages/Legal/CookiePolicy.vue'),
        },
        {
          path:'/privacy-policy',
          component: () => import('./pages/Legal/PrivacyPolicy.vue'),
        },
        {
          path:'/terms-of-use',
          component: () => import('./pages/Legal/TermsOfUse.vue'),
        }
    ],
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
      /*if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }*/
    },    
});