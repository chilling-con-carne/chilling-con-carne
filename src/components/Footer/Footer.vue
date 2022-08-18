<template>
<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img width="50" :src="Logo" alt="Chilling con carne's logo" />
    <p>Chilling Con Carne S.A.S <br>Creative minds since 2022</p>
  </div> 
  <div>
    <span class="footer-title">Services</span> 
    <router-link to="/services" class="link link-hover">Web design</router-link> 
    <router-link to="/services" class="link link-hover">Web development</router-link> 
    <router-link to="/services" class="link link-hover">Branding</router-link> 
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <router-link to="/about" class="link link-hover">About us</router-link> 
    <router-link to="/contact" class="link link-hover">Contact</router-link> 
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <router-link to="terms-of-use" class="link link-hover">Terms of use</router-link> 
    <router-link to="privacy-policy" class="link link-hover">Privacy policy</router-link> 
    <router-link to="cookie-policy" class="link link-hover">Cookie policy</router-link>
  </div>
</footer>
</template>

<script setup lang="ts">
import Logo from '../../assets/logo.png'
</script>