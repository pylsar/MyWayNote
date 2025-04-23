<template>
  <form @submit.prevent="addTaskData" class="task-form">
    <input
      v-model="taskStore.newTask"
      type="text"
      placeholder="Тайтл"
      class="task-input task-input__title"
      :disabled="taskStore.loading"
    >
    <textarea
      v-model="taskStore.newDescription"
      type="text"
      placeholder="Введите описание"
      class="task-input task-input__description"
      :disabled="taskStore.loading"
    ></textarea>
    <input type="reset" class="task-input__reset" value="x">
    <button 
      type="submit" 
      class="add-button"
      :disabled="!taskStore.newTask.trim() || taskStore.loading"
    >
      {{ taskStore.loading ? '...' : '+' }}
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
  
<style lang="scss" scoped>
 .task-form{
  display: flex;
  gap: 8px;
  & .task-input{
      color: #7B7B7B;
      background: #DBE2EF;
      border: 1px solid #B1B1B1;
      outline: none;
      height: 34px;
      min-height: 34px;
      border-radius: 6px;
      resize: none;
      padding:4px 28px 4px 8px;
      line-height: 24px;
      &__title{
        width: 120px;
        min-width: 120px;
      }
      &__description{
        flex: 1;
      }
      &:focus{
        outline: none;
      }
      &::placeholder{
        color: #7B7B7B;
      }
  }
  & .add-button{
    background: #5C9967;
      border: none;
    width: 34px;
    border-radius: 0 6px 6px 0;
    color: white;
    cursor: pointer;
    &:focus{
      outline: none;
    
    }
  }
  & .task-input__reset {
      display: none;
      position: absolute;
      right: 56px;
      top: 8px;
      width: 24px;
      height: 34px;
      outline: none;
      border: none;
      color: #FFFFFF;
      background: transparent;
      cursor: pointer;
   }
  & .task-input__description:not(:placeholder-shown)~.task-input__reset {
      display: block;
  }

}







  
</style>