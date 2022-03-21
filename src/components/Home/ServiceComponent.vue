<template>
	<div id="list-wrapper">
		<h3>{{ title }}</h3>
		<ul :style="'--list-color:'+listColor ">
			<li v-for="feat in features" :key="feat">{{ feat }}</li>
		</ul>
		<div class="learn-more">
			<router-link :to="learnMoreLink" target="_blank" rel="noopener noreferrer">Learn more</router-link>
			<img src="@/assets/right-arrow.png" alt="right arrow" height="30">
		</div>
	</div>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
	title: String,
	features: Array,
	listColor: String,
	learnMoreLink: String,
})

let title = ref(props.title);
let features = reactive(props.features);
let listColor = ref(props.listColor);
let learnMoreLink = ref(props.learnMoreLink);
console.log(learnMoreLink.value)


</script>

<style scoped lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Roboto:wght@400&display=swap');

	#list-wrapper{

		display: flex;
		flex-direction: column;

		align-items: center;

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
			justify-content: flex-start;

			list-style: none;

			&>li {
				margin-bottom: 1em;
				text-align: left;

				&::before {
					display: inline-block;
					content: '';
					-webkit-border-radius: 0.375rem;
					border-radius: 0.375rem;
					height: 0.5rem;
					width: 0.5rem;
					margin-right: 0.5rem;
					margin-left: -20px;
					background-color: var(--list-color); // given in the style attribute of the <ul> tag
				}
			}
		}

		&>.learn-more {
			display: flex;
			gap: 20px;

			align-items:center;

			transition: 0.5s;
			margin-bottom: 0px;

			width: fit-content;

			font-size: 1.15em;

			

			&>a {
				text-decoration: none;
				font-weight: 300;
				color: black;
			}

			&>img {
				transition: inherit;
				margin-top: -0.3em;
			}

			&:hover {
				cursor: pointer;

				&>img {
					transform: translateX(12px);
				}

				&>a {
					color: #565656;
				}
			}
		}
	}

</style>