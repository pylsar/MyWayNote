<template>
    <div class="task">
        <h1>Список задач:</h1>
        <TheAddTaskForm />
        <div v-if="loading" class="loading-container">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
        </div>
        <p v-else-if="error">Ошибка: {{ error.message }}</p>
        <ul v-else class="task-list">
            <li v-for="item in tasks" :key="item.id" class="task-item" :class="item.is_completed ? 'isCompleted' : 'inQue'" @click="toggleTask(item.id)">
                <div class="content">
                    <div class="name">{{ item.name }}</div>
                    <div class="desc">{{ item.description }}</div>

                    <div class="date">Создана: <time datetime="2025-04-19">19.04.2025</time></div>
                </div>

                <div class="control">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <div class="task-item-edit">
                        X
                    </div>
                    <div class="task-item-delete">
                        X
                    </div>
                </div>
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
   
.wrapper{
   background: #FAF7F2;
  padding: 40px;
} 

.task{
      position: relative;
      min-height: 200px;
      
}

.task-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
   & .task-item{
      width: calc(50% - 4px);
     background: #F0D1A8;
     border-radius: 8px;
     display: flex;
     justify-content: space-between;
     padding: 8px;
     &:hover{
       
     }
     &.isCompleted{

     }
   }
  & .content{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  & .control{
    margin-left: 20px;
  }
  
  & .name{
    font-size: 18px;
    font-weight: 700;
  }
  
  & .desc{
    margin-bottom: 20px;
  }
  
  & .date{
    margin-top: auto;
    font-weight: 700;
  }
}

.loading-container {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    & .circle {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #3498db;
      animation: pulse 2.1s infinite ease-in-out;
    }
    & .circle-1 {
        animation-delay: 0s;
    }

    & .circle-2 {
        animation-delay: .7s;
    }

    & .circle-3 {
        animation-delay: 1.4s;
    }
  
    @keyframes pulse {
      0%, 100% {
          transform: scale(0.8);
          opacity: 0.7;
      }
      50% {
          transform: scale(1.4);
          opacity: 1;
      }
  }

}

.checkbox-container{
    & input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    & .checkmark {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: #eee;
      border: 2px solid #ccc;
      border-radius: 50%;
      transition: all 0.3s;
        &::after{
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 1px;
          width: 5px;
          height: 10px;
          border: solid #3498db;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
    }
    &:hover input ~ .checkmark {
      background-color: #ddd;
    }
    & input:checked ~ .checkmark {
      border-color: #3498db;
      &::after{
         display: block;
      }
    }

} 


</style>