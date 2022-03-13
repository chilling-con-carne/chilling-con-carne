<template>
	<section id="services-first-part">
		<h1>We’re designers, developers, and builders making great things <strong>happen</strong></h1>
		<Chevrons href="#services-second-part"/>
		<div class="radial-gradient"></div>
		<div class="radial-gradient"></div>
	
	</section>
	<section id="services-second-part">
		<div>yolo</div>
	</section>
</template>

<script setup>
	import Chevrons from '@/components/Global/Chevrons.vue'
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Roboto:wght@400&display=swap');

	#services-first-part {
		width: 100vw;
		height: 100vh;

		position: relative;

		&>h1 {
			position: absolute;
			top: 40%;
			left: 50%;

			transform: translate(-50%, -50%);

			width: 15em;
			font-family: 'Raleway', sans-serif;
			font-size: 72px;
			font-weight: 300;
			color: black;

			&>strong {
				color: #0090A6
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
			
			position:absolute;

			width: 75%;
			height: 50%;

			background: radial-gradient(50% 50% at 50% 50%, #B0F5FF 0%, rgba(255, 255, 255, 0) 100%);
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
</style>