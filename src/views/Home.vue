<template>
  <div class="home">
   
    <div id="first-part">
      <div class="title">
        <img src="@/assets/computer.png" alt="computer">
        <div><span>CHILLING</span> <span><strong>CON</strong></span> <span>CARNE</span></div>
      </div>
      
      <a href="#second-part">
        <img src="@/assets/chevron-double-down.png" alt="chevron" id="chevrons">
      </a>

    </div>

    <div id="second-part">

      <HomeIntroComponent />
      <HomeServicesComponent />
      <HomeRecentWorkComponent />

    </div>
  </div>
</template>

<script setup>
import HomeIntroComponent from '@/components/Home/HomeIntroComponent.vue'
import HomeRecentWorkComponent from '@/components/Home/HomeRecentWorkComponent.vue'
import HomeServicesComponent from '@/components/Home/HomeServicesComponent.vue'
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:wght@400&display=swap');

  .home {
    display: flex;
    flex-direction: column;

  }

  #first-part { // part with the computer and the title

    background: linear-gradient(#80D4E1, #157887);

    height: 100vh;
    width: 100vw;
    
    &>.title {
      position: relative;

      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      width: 60vw;
      height: 50vh;

      &>img {
        max-width:100%;
        max-height:100%;

        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
      }

      &>div {

        position: absolute;

        top: 50%;
        left: 50%;

        margin: 0;

        color: white;

        gap: 20px;

        width: 50vw;

        transform: translate(-50%, -50%);

        &>span {
          text-shadow: 4px 2px 6px rgba(0,0,0,0.55);  
          font-size: 7vw;
          margin-left: 1vw;

          display: inline-block;

          transform: translateY(25px);
          opacity: 0;

          animation-name: text_appear;
          animation-duration: 0.75s;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;

          -moz-animation-name: text_appear;
          -moz-animation-duration: 0.75s;
          -moz-animation-timing-function: ease-in;
          -moz-animation-fill-mode: forwards;

          -webkit-animation-name: text_appear;
          -webkit-animation-duration: 0.75s;
          -webkit-animation-timing-function: ease-in;
          -webkit-animation-fill-mode: forwards;

          &:first-child{
            animation-delay: 0s;
            -moz-animation-delay: 0s;
            -webkit-animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: 0.125s;
            -moz-animation-delay: 0.125s;
            -webkit-animation-delay: 0.125s;
          }
          &:last-child {
            animation-delay: 0.25s;
            -moz-animation-delay: 0.25s;
            -webkit-animation-delay: 0.25s;
          }
        }
        @-webkit-keyframes text_appear {
          100%{
            opacity: 1;
            transform: none;
          }
        }

        & strong {

          text-shadow: none;

          background: rgb(255,241,43);
          background: linear-gradient(90deg, rgba(255,241,43,1) 0%, rgba(255,44,0,1) 50%, rgba(255,241,43,1) 100%);
          background-size: 300%;
          
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 900;
          letter-spacing: 0;
          
          text-transform: uppercase;
          
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animated_text 6s linear infinite 0s;
          -moz-animation: animated_text 6s linear infinite 0s;
          -webkit-animation: animated_text 6s linear infinite 0s;
        }
        @-webkit-keyframes animated_text {
          
          0% {
            background-position: 0%;
          }
          50% {
            background-position: 150%;
          }
          100% {
            background-position: 300%;
          }
        }
      }
    }

    & #chevrons {
      position: absolute;

      left: 50vw;
      transform: translateX(-50%);
      bottom: 5vh;

      &:hover {
        cursor: pointer;
      }

      animation: animated_chevron 3s linear infinite;
      -moz-animation: animated_chevron 3s linear infinite;
      -webkit-animation: animated_chevron 3s linear infinite;

      @-webkit-keyframes animated_chevron {
        0% {
          transform: translateY(0px);
        }
        50% {
         transform: translateY(10px); 
        }
        100% {
          transform: translateY(0px);
        }
      }
    }

  }
</style>