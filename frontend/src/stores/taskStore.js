import { defineStore } from 'pinia';
import axios from 'axios';

// Создаем экземпляр axios с базовым URL
const apiClient = axios.create({
	baseURL: 'http://127.0.0.1:8000',
});

export const useTaskStore = defineStore('data', {
	state: () => ({
		tasks: [], // Данные из JSON
		loading: false, // Состояние загрузки
		error: null, // Ошибка, если есть
		newTask: '', // Добавляем поле для новой задачи
		newDescription: '',
		newAnons: ''
	}),
	actions: {
		async fetchTaskData() {
			this.loading = true;
			// const url = 'http://127.0.0.1:8000';
			try {
				const response = await apiClient.get('/tasks'); // Путь к JSON
				this.tasks = response.data;
				console.log(this.tasks)
			} catch (error) {
				this.error = error;
			} finally {
				this.loading = false;
			}
		},
		async addTaskData() {
			if (!this.newTask.trim()) return; // Не добавляем пустые задачи
			this.loading = true;
			try {
			  const response = await apiClient.post('/tasks', {
				name: this.newTask,
				description: this.newDescription, 
				anons: this.newAnons,
				is_completed: false
			  })
			//   this.tasks.push(response.data)
			  this.tasks = [...this.tasks, response.data];
			  this.newTask = '' // Очищаем инпут
			  this.newDescription = ''
			  this.newAnons = ''

			    // Альтернативный вариант - перезагрузить весь список
    			await this.fetchTaskData();
			} catch (error) {
			  this.error = error.message
			} finally {
			  this.loading = false
			}
		},
		async toggleTaskCompletion(taskId) {
			this.loading = true;
			try {
			  await apiClient.patch(`/tasks/${taskId}/toggle`);
			  // Обновляем локальное состояние
			  const task = this.tasks.find(t => t.id === taskId);
			  if (task) {
				task.is_completed = !task.is_completed;
			  }
			} catch (error) {
			  this.error = error.message;
			} finally {
			  this.loading = false;
			}
		}

	},
});