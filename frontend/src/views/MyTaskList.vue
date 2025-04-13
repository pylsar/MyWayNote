<template>
    <div class="task">
        <h1>Список задач:</h1>
        <TheAddTaskForm />
        <h2>Загрузка JSON данных</h2>
        <p v-if="loading">Загрузка...</p>
        <p v-else-if="error">Ошибка: {{ error.message }}</p>
        <ul v-else class="task-list">
            <li v-for="item in tasks" :key="item.id" :class="item.is_completed ? 'isCompleted' : 'inQue'" @click="toggleTask(item.id)">
                <span>Имя: {{ item.name }}</span>
                <span>Описание: {{ item.description }}</span>
                <span>ID: {{ item.id }}</span>
            </li>
        </ul>
        {{ tasks }}
    </div>
</template>

<script setup>
    import TheAddTaskForm from '@/components/TheAddTaskForm.vue';
    import { useTaskStore } from '../stores/taskStore';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';

    const taskStore = useTaskStore();
    const { tasks, loading, error } = storeToRefs(taskStore);


    onMounted(() => {
        taskStore.fetchTaskData();
    });


    const toggleTask = async (taskId) => {
        // console.log('taskId', taskId)
        await taskStore.toggleTaskCompletion(taskId);
    };
</script>
<style lang="scss" scoped>
    .task-list{
        border: 1px solid red;
        & li{
            border: 1px solid green;
            &.isCompleted{
                // text-decoration: line-through;
                background: green;
            }
        }
    }
</style>