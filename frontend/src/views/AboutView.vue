<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div>
			<h1>Загрузка JSON данных</h1>
			<p v-if="loading">Загрузка...</p>
			<p v-else-if="error">Ошибка: {{ error.message }}</p>
			<div v-else>
				<h2>Данные из JSON:</h2>
				<div v-for="item in jsonData" :key="item.id">
					<span>{{ item.name }}</span>
					<span>{{ item.writer }}</span>
					<span>{{ item.year }}</span>
					<span>{{ item.country }}</span>

				</div>

				<!-- {{ jsonData }} -->
			</div>
		</div>
	</div>
</template>
<script setup>
import { useBBCStore } from '../stores/bbcStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const bbcStore = useBBCStore();
const { jsonData, loading, error } = storeToRefs(bbcStore);


onMounted(() => {
	bbcStore.fetchBBCData();
});
</script>