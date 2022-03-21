<template>
	<div class="service-container" :id="service.title.toLowerCase().replace(' ', '-')">
		<div class="service-header">
			<h2>{{ service.title }}</h2>
			<p>{{ service.sub_title }}</p>
		</div>
		<div id="sub-services-container">
			<SubService v-for="sub_service in service.services" :title="sub_service.title" 
																:description="sub_service.description"
																:key="sub_service.title" />
		</div>
	</div>
</template>

<script setup>
	import SubService from '@/components/Services/SubService.vue'
	import { defineProps, reactive } from 'vue'

	const props = defineProps({
		service: Object
	})

	let service = reactive(props.service)
</script>

<style lang="scss" scoped>

	.service-container {

		width: 80vw;

		padding-top: 10vh;

		margin: 0 auto 10% auto;

		display: flex;
		gap: 7vw;
		justify-content: space-between;

		@media screen and (max-width: 1250px) {
			flex-direction: column;
			justify-content: center;
			align-items: center;

			width: 100vw;

			margin-bottom: 33vh;
		}

		@media screen and (max-width: 500px) {
			width: 95vw;
		}

		&>.service-header, &>#sub-services-container {
			width: 50%;
		} 

		& h2 {

			margin-top: 0;
			font-size: 72px;
			color: black;
			text-align: left;
			font-weight: normal;

			max-width: 20vw;

			@media screen and (max-width: 820px) {
				font-size: 54px;
			}
			@media screen and (max-width: 500px) {
				font-size: 42px;
			}
			@media screen and (max-width: 400px) {
				font-size: 36px;
			}
		}

		& p {
			width: 90%;
			font-size: 18px;
			text-align: left;
			
			@media screen and (max-width: 820px) {
				font-size: 12px
			}
		}

		&>#sub-services-container {
			display: flex;
			flex-direction:column;
			gap: 5%;
		}
	}

</style>