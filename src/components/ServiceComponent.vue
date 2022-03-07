<template>
	<div id="list-wrapper">
		<h3>{{ title }}</h3>
		<ul>
			<li v-for="feat in features" :key="feat">{{ feat }}</li>
		</ul>
	</div>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
	title: String,
	features: Array,
	listColor: String,
})

let title = ref(props.title);
let features = reactive(props.features);
let listColor = ref(props.listColor);
	
console.log(listColor)
console.log(features)

</script>

<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400&display=swap');

	#list-wrapper{

		display: flex;
		flex-direction: column;


		max-width: 300px;

		&>h3{
			color:  black;
			font-family: 'Raleway', sans-serif;
			font-size: 28px;
			font-weight: 700;
		}

		&>ul {

			display: flex;
			flex-direction: column;

			align-items: flex-start;

			&>li {
				margin-bottom: 1em;
			}
		}
	}

</style>