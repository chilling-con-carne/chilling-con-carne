<template>
<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img width="50" :src="Logo" alt="Chilling con carne's logo" />
    <p>Chilling Con Carne S.A.S <br>{{ t('footer.minds') }}</p>
    <LangButton />
  </div> 
  <div>
    <span class="footer-title">{{ t('footer.services.title') }}</span> 
    <router-link to="/services" class="link link-hover">{{ t('footer.services.design') }}</router-link> 
    <router-link to="/services" class="link link-hover">{{ t('footer.services.development') }}</router-link> 
    <router-link to="/services" class="link link-hover">{{ t('footer.services.branding') }}</router-link> 
  </div> 
  <div>
    <span class="footer-title">{{ t('footer.company.title') }}</span> 
    <router-link to="/about" class="link link-hover">{{ t('footer.company.about') }}</router-link> 
    <router-link to="/contact" class="link link-hover">{{ t('footer.company.contact') }}</router-link> 
  </div> 
  <div>
    <span class="footer-title">{{ t('footer.legal.title') }}</span> 
    <router-link to="terms-of-use" class="link link-hover">{{ t('footer.legal.TOU') }}</router-link> 
    <router-link to="privacy-policy" class="link link-hover">{{ t('footer.legal.privacy') }}</router-link> 
    <router-link to="cookie-policy" class="link link-hover">{{ t('footer.legal.cookie') }}</router-link>
  </div>
</footer>
</template>

<script setup lang="ts">
import Logo from '../../assets/logo.png';
import LangButton from '../Misc/LangButton.vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>