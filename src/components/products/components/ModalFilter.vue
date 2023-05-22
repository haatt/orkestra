<template>
  <GenericModal ref="filterModal" title="Filtros" @on-close="closeModal">
    <template #body>
      <div class="flex flex-col space-y-3">
        <div class="space-x-2">
          <input
            id="n1"
            type="checkbox"
            class="appearance indeterminate:bg-gray-300 w-4 h-4"
          />
          <label for="n1">Con descuento</label>
        </div>

        <div class="space-x-2">
          <input
            id="n2"
            type="checkbox"
            class="appearance checked:bg-blue-500 w-4 h-4"
          />
          <label for="n2">Envio gratis</label>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex p-2 justify-end bg-gray-100 rounded-b-lg space-x-2">
        <GenericButton
          @click="closeModal"
          class="text-white bg-blue-500 hover:bg-blue-600"
        >
          Confirmar
        </GenericButton>
        <GenericButton
          @click="closeModal"
          class="text-gray-600 bg-white hover:bg-gray-200"
        >
          Cancelar
        </GenericButton>
      </div>
    </template>
  </GenericModal>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";

import GenericModal from "@/components/core/components/GenericModal.vue";
import GenericButton from "@/components/core/components/GenericButton.vue";

const filterModal = ref<InstanceType<typeof GenericModal> | null>(null);

const closeModal = function (): void {
  filterModal.value?.closeModal();
};
const openFilterModal = function (): void {
  filterModal.value?.openModal();
};

defineExpose({
  openFilterModal,
});
</script>
