<template>
    <nav>
      <ul :class="{'dark': path!='/'}">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/services">SERVICES</router-link></li>
        <li><router-link to="/work">WORK</router-link></li>
      </ul>
  </nav>
</template>

<script setup>
  import { watch, ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute();
  const path = ref(route.path);

  watch(() => route.name, () => {

      path.value = route.path;

    }, { immediate: true });


</script>

<style lang="scss" scoped>

  nav {

    z-index: 999;

    position: absolute;

    height: 64px; 
    display: flex; 
    align-items: center;
    justify-content: center;  
    margin-bottom: 3vh; 

    width: 100vw;
    margin: auto;

    ul { 

      padding: 0;

      font-family: 'Raleway', sans-serif;

      display: flex;
      gap: 20px;

      justify-content: space-between; 
      align-items: center; 
    
      margin: 0; 
      list-style: none; 
      
      &.dark {
        & a {
          color: black;
        }
      }

      li { 
        display:inline-block; 
        a { 
          color: white; 
          font-size: 14px; 
          font-weight: 500;
  
          text-transform: uppercase; 
          text-decoration: none; 
          letter-spacing: 0.15em; 
          display: inline-block; 
          position: relative; 
  
          transition: all 0.3s ease-in-out; 


          // ANIMATION SHIT
          transform: translateY(-10px);
          opacity: 0;

          animation-name: text_appear;
          animation-duration: 0.75s;
          animation-timing-function: ease-in;
          animation-fill-mode: forwards;

          -moz-animation-name: text_appear; // DUMB COMPATIBILY SHIT
          -moz-animation-duration: 0.75s;
          -moz-animation-timing-function: ease-in;
          -moz-animation-fill-mode: forwards;

          -webkit-animation-name: text_appear; // DUMB COMPATIBILY SHIT
          -webkit-animation-duration: 0.75s;
          -webkit-animation-timing-function: ease-in;
          -webkit-animation-fill-mode: forwards;
        }

        &:first-child>a{
          animation-delay: 0s;
          -moz-animation-delay: 0s;
          -webkit-animation-delay: 0s;
        }
        &:nth-child(2)>a {
          animation-delay: 0.125s;
          -moz-animation-delay: 0.125s;
          -webkit-animation-delay: 0.125s;
        }
        &:nth-child(3)>a {
          animation-delay: 0.25s;
          -moz-animation-delay: 0.25s;
          -webkit-animation-delay: 0.15s;
        }
        &:last-child>a {
          animation-delay: 0.375s;
          -moz-animation-delay: 0.375s;
          -webkit-animation-delay: 0.375s;
        }
         
        @-webkit-keyframes text_appear {
          0% {
          }
          100%{
            transform: none;
            opacity: 1;
          }
        }// END ANIMATION SHIT 
    
        a:hover { 
          color: #FFDF38; 
        } 
  
        a:after { 
          color: #FFDF38; 
          background: none repeat scroll 0 0 transparent; 
          bottom: 0; 
          content: ""; 
          display: block; 
          height: 2px; 
          left: 50%; 
          position: absolute; 
          background: #FFDF38; 
          transition: width 0.3s ease 0s, left 0.3s ease 0s; 
          width: 0; 
        } 
  
        a:hover:after { 
          width: 100%; 
          left: 0; 
        } 
      } 
    } 
  }

</style>