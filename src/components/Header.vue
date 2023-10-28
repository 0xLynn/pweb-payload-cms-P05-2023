<template>
  <div>
    <span class="font-bold text-4xl text-gray-700">Tasks</span>
    <span class="font-base text-sm text-gray-400">{{ taskStore.tasks.length }} tasks</span>
    <div class="w-full flex justify-end">
      <button @click="toggleModal" class="px-6 py-2 bg-gray-700 text-gray-200 font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">
        Create
      </button>
      <Modal @close-modal="toggleModal" :isModal="isModal">
        <CreateTaskForm @close-modal="toggleModal" />
      </Modal>
    </div>
  </div>
</template>

<script>
import { taskStore } from "../store/store.js";
import Modal from "../components/Modal.vue";
import CreateTaskForm from "../components/CreateTaskForm.vue";

export default {
  components: {
    Modal,
    CreateTaskForm,
  },
  data() {
    return {
      taskStore,
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>
