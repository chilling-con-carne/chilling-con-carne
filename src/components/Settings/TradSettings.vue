<template>
	<div class="container">
		<div class="lang-select">
			<button value="EN" :class="state.lang=='EN' ? 'active' : '' " @click="store.commit('changeLang', 'EN')">🇬🇧</button>
			<button value="FR" :class="state.lang=='FR' ? 'active' : '' " @click="store.commit('changeLang', 'FR')">🇫🇷</button>
		</div>
	</div>
</template>

<script setup>
	import { useStore } from 'vuex'

	const store = useStore();
	const state = store.state;
</script>

<style lang="scss" scoped>

	.lang-select {
		&>button {	
			border: none;
			background-color: rgba(255,255,255,0);

			font-size: 1.5rem;

			padding: 5px 10px;

			&.active{
				background-color: rgba(0,0,0,0.25)
			}

			&:hover {
				background-color: rgba(0,0,0,0.5);
			}

			&:last-child::before {
				content:'';
				width: 2px;
				height: 50%;
				background-color: black;
				position: absolute;
				top: 25%;
				left: 50%;
			}
		}
	}

</style>