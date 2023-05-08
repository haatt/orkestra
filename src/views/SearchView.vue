<template>
  <div class="search-view">
    <CardContainer>
      <template #header>
        <ProductsHeader></ProductsHeader>
      </template>

      <template #body>
        <p v-if="rafa" @click="() => (rafa = !rafa)">hiiiiii</p>
        <p v-else @click="() => (rafa = !rafa)">rafaa</p>
      </template>
    </CardContainer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import CardContainer from "@/components/core/CardContainer.vue";
import ProductsHeader from "@/components/products/ProductsHeader.vue";

const rafa = ref(false);
</script>
