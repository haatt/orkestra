<template>
  <div class="list-products">
    <div v-if="props.productsList">
      <div
        v-for="product in props.productsList"
        :key="product.id"
        class="h-[135px] bg-white border-b p-[15px] flex"
      >
        <div class="h-full min-w-[95px] flex justify-center items-center">
          <img class="max-w-[74px]" :src="imageSrc(product)" alt="img" />
        </div>
        <div
          class="h-full w-full text-[18px] font-[Hind] leading-[21px] uppercase text-[#95A5A6] flex flex-col justify-center"
        >
          <p>{{ product.product_name }}</p>
          <p class="text-[#35495E] font-bold">{{ product.brand_name }}</p>
          <p class="text-[#35495E]">${{ product.price }}</p>
          <p>{{ product.color_name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

import type { BrandFormData } from "@/components/products/services/ProductService.types";

const props = defineProps({
  productsList: {
    type: Array as PropType<BrandFormData[]>,
    required: false,
  },
});

const imageSrc = function (product: BrandFormData): string {
  return `${product.images[0].path}${product.images[0].file}`;
};
</script>
