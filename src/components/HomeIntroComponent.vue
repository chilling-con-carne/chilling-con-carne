<template>
  <div id="intro-wrapper">
    <h2>Modern, professional and simply <strong>amazing</strong></h2>
    <p>Chilling Con Carne partners with clients all over the world to deliver products adapted to their needs. </p>
    <span></span>
    <p>Our team is dedicated to you, to help making your dream project real.</p>
  </div>
</template>


<script>
  
</script>

<style lang="scss" scoped>
 #intro-wrapper {

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

        @media screen and (max-width: 568px) {
          font-size: 48px;
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
        min-width: 300px;

        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 400;
      }
    }
</style>