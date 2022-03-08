<template>
	<div class="settings-container">
		<TradSettings />
	</div>
</template>

<script setup>
	import TradSettings from '@/components/Settings/TradSettings.vue'
</script>

<style lang="scss" scoped>
	.settings-container {
		position: absolute;
		width: fit-content;
	}
</style>