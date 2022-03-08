<template>
<div id="services-wrapper">
	<h2>
	We want to help you <br> make an impact. Here's how:
	</h2>
	<ul>
		<li><ServiceComponent title="Web design 💄"
			:features="['Modern, attractive and fully responsive',
			'Mobile & Web Apps',
			'UI Prototyping',
			]"
			list-color="#00A3FF"
			learn-more-link="/services/web-design"/>
		</li>
		<div class="separator"></div>
		<li><ServiceComponent title="Web development 💻"
			:features="['Robust, secure, mordern and built with the latest technologies',
			'Frontend / backend development',
			'Q/A Testing',
			]"
			list-color="#FF0000"
			learn-more-link="/services/web-development"/>
		</li>
		<div class="separator"></div>
		<li><ServiceComponent title="Branding 💼"
			:features="['Your fully customized website fitting your brand',
			'Logo design and brand image ',
			'Corporate Identity',
			]"
			list-color="#00900E"
			learn-more-link="/services/branding"/>
		</li>
	</ul>
</div>
</template>

<script setup>
import ServiceComponent from '@/components/ServiceComponent.vue'
</script>


<style lang="scss">
	#services-wrapper {

      width: 75vw;
      height: 75vh;
      margin: auto;

      @media screen and (max-width:900px){
		height: fit-content;
      }



      &>h2 {
        font-family: 'Raleway', sans-serif;
        font-size: 64px;

        color: black;

        @media screen and (max-width: 568px) {
          font-size: 48px;
        }
      }

      &>ul {

        margin: 0;

        list-style:none;

        display: flex;
        flex-direction: row;
        gap: 5vw;
        justify-content:center;
        align-items: center;

        &>.separator {
          width: 3px;
          height: 100px;

          margin-top: 20px;

          border-radius: 10px;

          background-color: #7CD1DE;
        }

        @media screen and (max-width: 900px) {
          flex-direction: column;

          &>.separator {
            width: 100px;
            height: 3px;
          }
        }

      } 
    }
</style>