<template>
    <nav>
      <ul>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/services">SERVICES</router-link></li>
        <li><router-link to="/work">WORK</router-link></li>
      </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&');

  nav {

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
  
      li {  
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
        } 
  
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