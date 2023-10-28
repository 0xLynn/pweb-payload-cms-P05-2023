<template>
  <div class="flex justify-center items-center mt-20">
    <div class="p-4 w-1/2">
      <h2 class="text-2xl font-bold text-gray-700 mb-4 flex items-center">
        <div @click="$router.go(-1)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
              class="cursor-pointer"
            />
          </svg>
        </div>
        Edit Task
      </h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-gray-700 font-semibold">Task</label>
          <input v-model="inputNewTask" class="border rounded-md px-3 py-2 border-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-gray-700 font-semibold">Priority</label>
          <input v-model="inputNewPriority" class="border rounded-md px-3 py-2 border-gray-400 focus:outline-none focus:border-blue-500" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-gray-700 font-semibold">Category</label>
          <select v-model="inputNewCategory" class="border rounded-md px-3 py-2 border-gray-400 focus:outline-none focus:border-blue-500">
            <option value="practical">Practical</option>
            <option value="course">Course</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex items-center">
            <label class="text-gray-700 font-semibold">Status</label>
            <input type="checkbox" v-model="inputNewStatus" class="border rounded-md px-3 py-2 border-gray-400" />
          </div>
        </div>
      </div>
      <button @click="updateTask(id)" class="px-4 py-2 mt-4 bg-gray-700 text-gray-100 font-bold text-sm rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">Submit</button>
    </div>
  </div>
</template>

<script>
import { taskStore } from "../store/store.js";
export default {
  data() {
    return {
      taskStore,
      id: this.$route.params.id,
      inputNewTask: "",
      inputNewPriority: "",
      inputNewCategory: "",
      inputNewStatus: false,
    };
  },
  methods: {
    getTaskById() {
      const task = this.taskStore.tasks.find((task) => task.id === parseInt(this.id) || task.id === this.id);
      if (task) {
        this.inputNewTask = task.task;
        this.inputNewPriority = task.priority;
        this.inputNewCategory = task.category;
        this.inputNewStatus = task.status;
      }
    },
    updateTask(index) {
      const updatedTask = {
        id: index,
        task: this.inputNewTask,
        priority: this.inputNewPriority,
        category: this.inputNewCategory,
        status: this.inputNewStatus,
      };
      taskStore.editTask(updatedTask);
      this.$router.push('/');
    }
  },
  mounted() {
    this.getTaskById();
  },
};
</script>
