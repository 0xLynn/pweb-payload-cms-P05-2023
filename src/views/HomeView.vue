<script>
import Modal from "../components/Modal.vue";
import TaskList from "../components/TaskList.vue";
import CreateTaskForm from "../components/CreateTaskForm.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Modal,
    TaskList,
    CreateTaskForm,
    Header,
  },
};
</script>

<template>
  <main class="min-h-full w-full flex flex-col justify-center p-8">
    <div class="w-full h-fit justify justify-center flex flex-col mt-3 px-56">
      <Header />
      <TaskList />
    </div>
  </main>
</template>
