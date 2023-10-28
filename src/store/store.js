import { reactive } from "vue";

export const taskStore = reactive({
  tasks: [],

  loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (tasks.length > 0) {
      this.tasks = tasks;
    } 
    else {
      this.tasks = [
        { id: 0, task: "Pemrograman Web", priority: "Low", category: "practical", status: false },
        { id: 1, task: "Struktur Data", priority: "Medium", category: "course", status: false },
        { id: 2, task: "Sistem Operasi", priority: "High", category: "others", status: false },
      ];
      this.saveTasks();
    }
  },

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },

  createTask(task) {
    this.tasks.push(task);
    this.saveTasks();
  },

  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.saveTasks();
    }
  },

  editTask(updatedTask) {
    const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1, updatedTask);
      this.saveTasks();
    }
  },
});

taskStore.loadTasks();
