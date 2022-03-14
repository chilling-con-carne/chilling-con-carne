<template>
	<div id="service-container">
		<div id="service-header">
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
	console.log(service)
</script>

<style lang="scss" scoped>

	#service-container {
		
		// margin-top: 100vh;
		
		width: 85vw;
		height: 80vh;
		margin: auto;

		display: flex;
		justify-content: space-between;

		&>#service-header, &>#sub-services-container {
			width: 50%;
		} 

		& h2 {
			font-size: 72px;
			color: black;
			text-align: left;
		}

		& p {
			font-size: 18px;
			text-align: left;
		}

		&>#sub-services-container {
			display: flex;
			flex-direction:column;
			gap: 20px;
		}
	}

</style>