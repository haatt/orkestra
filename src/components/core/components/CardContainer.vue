<template>
  <div class="card-container">
    <div v-show="props.showHeader" class="w-full">
      <slot name="header"></slot>
    </div>
    <div class="h-auto min-w-full px-[12px]">
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
  backgroundColor: {
    type: String,
    default: "#E3E9EE",
  },
});
</script>

<style lang="scss">
.card-container {
  @apply flex flex-col items-center mx-auto min-h-screen max-w-6xl min-w-[414px] shadow-xl pb-2;
  background-color: v-bind(backgroundColor);
}
</style>
