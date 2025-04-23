<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>

	<TheHeader />
	<main>
		<RouterView />
	</main>
	<TheFooter />
</template>

<style scoped>
*{
  	box-sizing: border-box;
	margin: 0;
	padding: 0;
  	list-style: none;
}
</style>
