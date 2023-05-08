<template>
  <div class="custom-input">
    <div class="flex justify-center items-center">
      <SearchIcon class="w-[19px] ml-[13px]" />
    </div>

    <input
      type="text"
      v-model="textToSearch"
      :placeholder="props.placeholder"
      class="w-full p-2 focus:outline-none focus:border-blue-500"
    />

    <div class="flex justify-center items-center">
      <BarcodeIcon v-if="showBarcodeIcon" class="w-[30px] mr-[13px]" />
      <ClearFieldIcon
        v-else
        class="w-[26px] mr-[13px]"
        @click="clearSearchText"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch, computed } from "vue";
import { debounce } from "lodash";

import BarcodeIcon from "@/components/shared/components/icons/BarCodeIcon.vue";
import ClearFieldIcon from "@/components/shared/components/icons/ClearFieldIcon.vue";
import SearchIcon from "@/components/shared/components/icons/SearchIcon.vue";

const textToSearch = ref("");
const debouncedSearch = debounce(() => {
  emits("onWriting", textToSearch.value);
}, 750);
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

watch(textToSearch, () => debounceWriting());

const showBarcodeIcon = computed(() => textToSearch.value === "");

const emits = defineEmits<{
  (e: "onWriting", text: string): void;
}>();

const debounceWriting = function (): void {
  debouncedSearch();
};

const clearSearchText = async function (): Promise<void> {
  textToSearch.value = "";
};
</script>

<style lang="scss">
.custom-input {
  @apply flex items-center w-full h-12 bg-white rounded-sm border border-gray-300;
}
</style>
