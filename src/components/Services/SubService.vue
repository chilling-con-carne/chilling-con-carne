<template>
	<div>
		<h2>{{ title }}</h2>
		<p>{{ description }}</p>
	</div>
</template>

<script setup>
	import { defineProps, toRefs } from 'vue'
	
	const props = defineProps({
		title: String,
		description: String,
	})

	let { title, description } = toRefs(props)

</script>

<style lang="scss" scoped>
	
	div {
		border: solid 1px #0090A6;
		border-radius: 10px;
		padding: 20px;

		width: 25vw;

		&>* {
			margin: 0;
			text-align: left;
		}

		&>h2{
			margin-bottom: 10px;
			font-size: 36px;
		}

		&>p {
			font-size: 18px;
		}
	}

</style>