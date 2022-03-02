<template>
  <div class="home">
   
    <div id="first-part">
      <div class="title">
        <img src="@/assets/computer.png" alt="computer">
        <h1>CHILLING <strong>CON</strong> CARNE</h1>
      </div>
      
      <a href="#second-part">
        <img src="@/assets/chevron-double-down.png" alt="chevron" id="chevrons">
      </a>

    </div>

    <div id="second-part">
      
      <img src="@/assets/pepper.png" alt="pepper-1" width="200">
      <img src="@/assets/pepper.png" alt="pepper-2" width="200">

      <div id="intro-wrapper">
        <h2>Modern, professional and simply <strong>amazing</strong></h2>
        <p>Chilling Con Carne partners with clients all over the world to deliver products adapted to their needs. </p>
        <span></span>
        <p>Our team is dedicated to you, to help making your dream project real.</p>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>


<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:wght@400&display=swap');

  .home {
    display: flex;
    flex-direction: column;

  }

  #first-part {

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

      &>h1 {

        position: absolute;
        margin: 0;

        color: white;
        text-shadow: 4px 2px 6px rgba(0,0,0,0.55);

        font-size: 7vw;

        position: absolute;
        top: 50%;
        left: 50%;

        width: 100%;

        transform: translate(-50%, -50%);

        &>strong {
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
          animation: animated_text 6s linear infinite;
          -moz-animation: animated_text 6s linear infinite;
          -webkit-animation: animated_text 6s linear infinite;
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

  #second-part {

    height: 200vh;
    
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 8px;
    transform-style: preserve-3d;

    background-color: white;

    &>img {
      position: absolute;

      :first-child {
        transform: translateZ(-3px);
      }
      :last-child {
        transform-origin: 0;
        transform: translateZ(3px);
      }
    }


    &>#intro-wrapper {

      position: relative;

      width: 50%;
      height: 100vh;

      margin: auto;

      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      &>h2{
        font-family: 'Raleway', sans-serif;
        font-size: 64px;

        color: black;

        &>strong {
          color: #FFDF38;
        }
      }

      &>span {
        height:5px;
        width: 100px;

        background-color: #7CD1DE;

        border-radius: 3px;
      }

      &>p{

        width: 65%;

        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
      }
    }

  }
</style>