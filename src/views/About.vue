<template>
  <section id="about-hero">
    <h1>
      We’re designers, developers, and builders making great things
      <strong>happen</strong>
    </h1>
    <Chevrons href="#about-portraits" />
    <div class="radial-gradient"></div>
    <div class="radial-gradient"></div>
  </section>
  <!-- <section id="about-portraits">
    <AboutPortrait
      v-for="about in about_array"
      :about="about"
      :key="about.name"
    />
  </section> -->
  <AboutPortraitComponentTest />  
</template>

<script setup>
import Chevrons from "@/components/Global/Chevrons.vue";
//import AboutPortrait from "@/components/About/AboutPortraitComponent.vue";
import AboutPortraitComponentTest from "@/components/About/AboutPortraitComponentTest.vue"
// import { reactive } from "vue";

</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:wght@400&display=swap");

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 10%, 0);
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

#about-hero {
  opacity: 0;
  animation: fadeInUp 2s ease-in-out 0s forwards;

  width: 100vw;
  height: 100vh;

  position: relative;

  & > h1 {
    position: absolute;
    top: 40%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 15em;
    font-family: "Raleway", sans-serif;
    font-size: 72px;
    font-weight: 300;
    color: black;

    & > strong {
      color: #0090a6;
    }

    @media screen and (max-width: 1100px) {
      font-size: 48px;
    }
    @media screen and (max-width: 750px) {
      font-size: 40px;
      width: 12em;
    }
    @media screen and (max-width: 450px) {
      width: 8em;
    }
  }

  & .radial-gradient {
    position: absolute;

    width: 75%;
    height: 50%;

    background: radial-gradient(
      50% 50% at 50% 50%,
      #b0f5ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 1;

    &:first-of-type {
      transform: translate(-50%);
    }

    &:last-child {
      transform: translateX(50%);
      bottom: 0;
      right: 0;
    }
  }
}

#about-portraits {
  margin: 10vh 0;

  & > * {
    margin: 30vh 0;
  }
}
</style>
