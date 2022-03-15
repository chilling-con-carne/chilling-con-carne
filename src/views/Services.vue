<template>
	<section id="services-first-part">
		<h1>We’re designers, developers, and builders making great things <strong>happen</strong></h1>
		<Chevrons href="#services-second-part"/>
		<div class="radial-gradient"></div>
		<div class="radial-gradient"></div>
	</section>
	<section id="services-second-part">
		<Service v-for="service in services_array" :service="service" :key="service.title"/>
	</section>
</template>

<script setup>
	import Chevrons from '@/components/Global/Chevrons.vue'
	import Service  from '@/components/Services/Service.vue'

	import { reactive } from 'vue'

	let services_array = reactive([
		{
			title: "Web desgin",
			sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
			services: [
				{
					title: "Modern & attractive",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "Mobile & Web Apps",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "UI Prototyping",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
			]
		},
		{
			title: "Web development",
			sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
			services: [
				{
					title: "Robust, secure & modern",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "Frontend & Backend",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "Q/A Testing",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
			]
		},
		{
			title: "Branding",
			sub_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
			services: [
				{
					title: "Website fitting your brand",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "Logo design & brand image",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
				{
					title: "Corporate identity",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur turpis urna, cursus non egestas sit amet, pulvinar vitae neque. Maecenas urna tortor, vehicula nec augue vitae, elementum ultrices nisi. Mauris ac lorem id neque tincidunt iaculis sed in leo.",
				},
			]
		},
	])
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