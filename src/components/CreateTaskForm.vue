<template>
  <div>
    <span class="text-gray-700 font-bold text-2xl">Create Task</span>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1">
        <label class="text-gray-700 font-semibold">Task</label>
        <input v-model="inputTask" class="border-2 py-1 border-gray-400 rounded-md" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-gray-700 font-semibold">Priority</label>
        <input v-model="inputPriority" class="border-2 py-1 border-gray-400 rounded-md" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-gray-700 font-semibold">Category</label>
        <select v-model="inputCategory" class="border-2 py-1 border-gray-400 rounded-md">
          <option value="">Select a category</option>
          <option value="practical">Practical</option>
          <option value="course">Course</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <label class="text-gray-700 font-semibold">Status</label>
          <input type="checkbox" v-model="inputStatus" class="border-2 ml-2 border-gray-400 rounded-md" />
        </div>
      </div>
    </div>
    <button @click="addTask" class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300">Submit</button>
  </div>
</template>

<script>
import { taskStore } from "../store/store.js";

export default {
  data() {
    return {
      inputTask: "",
      inputPriority: "",
      inputCategory: "",
      inputStatus: false,
    };
  },
  methods: {
    addTask() {
      if (this.inputTask === "" || this.inputPriority === "") {
        return;
      }
      const newTask = {
        id: Date.now().toString(),
        task: this.inputTask,
        priority: this.inputPriority,
        category: this.inputCategory,
        status: this.inputStatus,
      };
      taskStore.createTask(newTask);
      this.inputTask = "";
      this.inputPriority = "";
      this.inputCategory = "";
      this.inputStatus = false;
      this.$emit("close-modal");
    },
  },
};
</script>
