<template>
  <div class="card-container">
    <!-- Slot para el header -->
    <div v-show="props.showHeader" class="w-full">
      <slot name="header"></slot>
    </div>

    <!-- Slot para el body -->
    <div class="w-full px-[12px]">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.card-container {
  @apply flex flex-col items-center mx-auto h-screen bg-[#E3E9EE] max-w-6xl min-w-[414px] shadow-xl;
}
</style>
