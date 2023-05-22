<template>
  <transition name="fade">
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-80">
        <div class="flex items-center justify-between p-4">
          <h2 class="text-lg font-bold">{{ title }}</h2>
          <button @click="closeModal" class="text-gray-600 hover:text-gray-800">
            <TimesIcon />
          </button>
        </div>

        <div class="p-4">
          <slot name="body"></slot>
        </div>

        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, defineExpose } from "vue";

import TimesIcon from "@/components/shared/components/icons/TimesIcon.vue";

const showModal = ref(false);

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<{
  (e: "close"): void;
  (e: "open"): void;
}>();

const closeModal = function (): void {
  showModal.value = !showModal.value;
  emit("close");
};
const openModal = function (): void {
  showModal.value = !showModal.value;
  emit("open");
};

defineExpose({
  closeModal,
  openModal,
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
