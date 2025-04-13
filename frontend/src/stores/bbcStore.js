import { defineStore } from 'pinia';
import axios from 'axios';

export const useBBCStore = defineStore('data', {
	state: () => ({
		jsonData: null, // Данные из JSON
		loading: false, // Состояние загрузки
		error: null, // Ошибка, если есть
	}),
	actions: {
		async fetchBBCData() {
			this.loading = true;
			try {
				const response = await axios.get('/src/assets/json/bbc.json'); // Путь к JSON
				this.jsonData = response.data;
				console.log(this.jsonData)
			} catch (error) {
				this.error = error;
			} finally {
				this.loading = false;
			}
		},
	},
});