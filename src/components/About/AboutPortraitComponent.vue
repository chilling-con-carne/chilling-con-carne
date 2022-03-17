<template>
  <div id="about">
    <div id="info">
      <h3>
        {{ " // " + about.position.toUpperCase() }}
      </h3>
      <h2>{{ about.name }}</h2>
      <div id="text">
        <p id="one-line">{{ about.line }}</p>
        <p>{{ about.description }}</p>
      </div>
      <ul>
        <li>
          <a :href="about.linkedin"
            ><img
              src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg"
              alt="LinkedIn"
              title="LinkedIn"
          /></a>
        </li>
        <li>
          <a :href="about.github"
            ><img
              src="https://unpkg.com/simple-icons@latest/icons/github.svg"
              alt="Github"
              title="Github"
          /></a>
        </li>
      </ul>
    </div>
    <img id="portrait" :src="require(`@/assets/${about.picture}`)" />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  about: Object,
});

let { about } = toRefs(props);
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400&display=swap");

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

#about {
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  align-items: center;
  justify-content: space-around;

  #info {
    max-width: 600px;
    width: 80vw;
    text-align: left;
    margin-left: 20px;
    letter-spacing: 0.04em;

    h3 {
      opacity: 0;
      animation: fadeInUp 0.5s ease-in-out 0s forwards;

      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      color: #0090a6;
    }

    h2 {
      opacity: 0;
      animation: fadeInUp 1s ease-in-out 0s forwards;

      width: 200px;
      font-weight: 600;
      font-size: 96px;
      line-height: 86px;
      margin: 0;
      color: #0090a6;

      &:last-of-type {
        @media screen and (min-width:1240px) and (max-width:1550px) {
          font-size: 72px;
        }
        @media screen and (max-width:1050px) {
          font-size: 72px;
        }
        @media screen and (max-width:675px) {
          line-height: 54px;
          font-size: 54px;
        }
        @media screen and (max-width:500px) {
          line-height: 44px;
          font-size: 44px;
        }
        @media screen and (max-width:400px) {
          line-height: 36px;
          font-size: 36px;
        }
      }

    }

    #text {
      opacity: 0;
      animation: fadeInUp 1.5s ease-in-out 0s forwards;
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
      }

      #one-line {
        font-weight: 600;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;

      li {
        list-style: none;

        img {
          width: 24px;
          margin-right: 20px;
        }
      }
    }
  }

  #portrait {
    max-width: 600px;
    max-height: 100%;
    width: 80vw;

    opacity: 0;
    animation: fadeInUp 1.5s ease-in-out 0s forwards;
  }
}
</style>
