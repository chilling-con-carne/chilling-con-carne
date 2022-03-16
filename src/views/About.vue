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
  <section id="about-portraits">
    <AboutPortrait
      v-for="about in about_array"
      :about="about"
      :key="about.name"
    />
  </section>
</template>

<script setup>
import Chevrons from "@/components/Global/Chevrons.vue";
import AboutPortrait from "@/components/About/AboutPortraitComponent.vue";

import { reactive } from "vue";

let about_array = reactive([
  {
    name: "Vincent Wendling ",
    position: "co-founder - ceo",
    title: "Funny title.",
    line: "One line description.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare quam ut diam euismod porttitor. Pellentesque convallis urna ac massa viverra, nec auctor lacus rutrum. Praesent cursus volutpat lacus et auctor. Vestibulum vehicula egestas tellus a facilisis. Mauris nibh eros, eleifend et odio sit amet, sodales eleifend lectus. Phasellus vestibulum lobortis imperdiet. Sed dignissim condimentum hendrerit. Praesent volutpat elementum risus, in venenatis enim gravida a. Nunc vel efficitur neque, pellentesque aliquet justo. Praesent eu dui vel ex pretium porta. Sed metus eros, suscipit quis nunc consectetur, semper hendrerit eros.",
    picture: "logo.png",
    linkedin: "https://www.linkedin.com/in/vincent-wendling-5a939a1b7/",
    github: "https://github.com/TisaneFruitRouge",
  },
  {
    name: "Germain Eguina",
    position: "co-founder - fullstack dev",
    title: "Funny title.",
    line: "Wise, Smart & versatile",
    description:
      "I am 20 years old and I am from the Central African Republic. Currently studying computer engineering in Strasbourg, I have developed a versatility in development and programming. I like to spend time on a subject that interests me and new technologies and computer science itself are great passions.",
    picture: "logo.png",
    linkedin: "https://www.linkedin.com/in/germain-eguina-4bab70220/",
    github: "https://github.com/kiLLuua",
  },
  {
    name: "Eden Kharoub.",
    position: "co-founder - designer",
    line: "Cat enthusiast with a passion for detail.",
    description:
      "I’m a frontend engineer passionate about graphic design and data visualisation. I like playing piano, cooking, gardening, and just trying every possible art medium known to man. I love learning new things and my coworkers like to say I have an unhealthy obsession with reading documentation. I currently am in a five-year integrated masters degree course studying computer science, focusing primarily on graphics programming, VR, and game interaction.",
    picture: "logo.png",
    linkedin: "https://fr.linkedin.com/in/eden-kharoub-6a9958187",
    github: "https://github.com/Kokoden",
  },
  {
    name: "Léandre BLANCHEGELEY",
    position: "co-founder - backend dev",
    title: "Funny Title",
    line: "Manliest man you've ever met",
    description:
      "I am a 20 years old student at 42 School and a technology lover, I thrive on innovating and discovering new things. As a back end programmer, exploring the depth of systems and building their architecture is one of my many skills.",
    picture: "logo.png",
    linkedin: "google.fr",
    github: "https://github.com/SanGoruden",
  },
]);
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

    @media screen and (max-width: 1000px) {
      font-size: 48px;
    }
    @media screen and (max-width: 700px) {
      font-size: 36px;
      width: 10em;
    }
    @media screen and (max-width: 400px) {
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
