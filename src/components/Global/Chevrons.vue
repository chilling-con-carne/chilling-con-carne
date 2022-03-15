<template>
	<a :href="href">
        <img v-if="path=='/'" src="@/assets/chevron-w.png" alt="chevron">
        <img v-else src="@/assets/chevron-b.png" alt="chevron">
	</a>
</template>

<script setup>
	import { defineProps, ref } from 'vue'
	import { useRoute } from 'vue-router'
  
	const route = useRoute();
	const path = route.path;

	let props = defineProps({
		href: String,
	})

	let href = ref(props.href)

</script>

<style lang="scss" scoped>
	a {
      position: absolute;

      left: 50vw;
      transform: translateX(-50%);
      bottom: 5vh;

      &:hover {
        cursor: pointer;
      }

      animation: animated_chevron 3s linear infinite;
      -moz-animation: animated_chevron 3s linear infinite;
      -webkit-animation: animated_chevron 3s linear infinite;

      @-webkit-keyframes animated_chevron {
        0% {
          transform: translateY(0px);
        }
        50% {
         transform: translateY(10px); 
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
</style>