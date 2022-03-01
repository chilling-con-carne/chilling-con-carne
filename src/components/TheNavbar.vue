<template>
    <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/services">SERVICES</router-link>
      <router-link to="/work">WORK</router-link>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&');

#nav {

  margin-top: 5vh;

  position: absolute;

  top: 0;
  left: 0;

  width: 100vw;
  height: 1.1em;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 15px;

  &>a {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;

    color:white;

    text-decoration: none;


    &::after {
      content: "";
      width: 100%;
      height:2px;

      background-color: white;
      transition: 0.3s;
    
      display: none;
    }

    &:hover::after {
      display: block;      
    }
  }
}

</style>