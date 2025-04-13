<template>
    <form @submit.prevent="addTaskData" class="task-form">
      <input
        v-model="taskStore.newTask"
        type="text"
        placeholder="Введите задачу"
        class="task-input"
        :disabled="taskStore.loading"
      >
      <textarea
        v-model="taskStore.newDescription"
        type="text"
        placeholder="Введите описание"
        class="task-input"
        :disabled="taskStore.loading"
      ></textarea>
      <button 
        type="submit" 
        class="add-button"
        :disabled="!taskStore.newTask.trim() || taskStore.loading"
      >
        {{ taskStore.loading ? 'Сохранение...' : 'Добавить' }}
      </button>
    </form>
  </template>
  
  <script setup>
  import { useTaskStore } from '@/stores/taskStore'
  
  const taskStore = useTaskStore()
  
  const addTaskData = () => {
    taskStore.addTaskData()
  }

  </script>
  
  <style scoped>
 
  
  </style>