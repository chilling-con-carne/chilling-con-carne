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
			font-size: 32px;
			font-weight: 700;
		}

		&>ul {
			margin: 0;

			&>li {
				margin-bottom: 1em;

				list-style: none;

				&::before{
					content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
					color: white; /* Change the color */
					width:1px;
					height:1px;

					border: 1px solid red;
					border-radius: 10px;
					// border-radius: 10px;
					// font-weight: bold;  If you want it to be bold 
					// display: inline-block; /* Needed to add space between the bullet and the text */
					// width: 0.5em;  Also needed for space (tweak if needed) 
					// height: 0.5em;
					margin-left: -1em; /* Also needed for space (tweak if needed) */
				}
			}
		}
	}

</style>