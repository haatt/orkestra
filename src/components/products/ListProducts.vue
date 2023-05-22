<template>
  <div class="list-products">
    <div v-if="props.productsList">
      <div
        v-for="product in props.productsList"
        :key="product.product_id"
        class="group/item product"
      >
        <div class="product-image">
          <img class="max-w-[74px]" :src="imageSrc(product)" alt="img" />
        </div>
        <div class="product-description">
          <p>{{ product.product_name }}</p>
          <p class="text-[#35495E] font-bold">{{ product.brand_name }}</p>
          <p class="text-[#35495E]">${{ product.price }}</p>
          <p>{{ product.color_name }}</p>
        </div>
        <span
          class="invisible group-hover/item:bg-slate-200 group-hover/item:visible px-5 py-1 rounded-2xl"
        >
          Ver
        </span>
      </div>
    </div>
    <div v-else class="no-products">
      <span class="font">OOPS! No pudimos encontrar lo que buscabas...</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";

import type { ProductData } from "@/components/products/services/ProductService.types";

import NoImage from "@/assets/images/no-photo.png";

const props = defineProps({
  productsList: {
    type: Array as PropType<ProductData[]>,
    required: true,
  },
});

const imageSrc = function (product: ProductData): string {
  const image = product.images[0]
    ? `${product.images[0]?.path}${product.images[0]?.file}`
    : NoImage;
  return image;
};
</script>

<style lang="scss" scoped>
.product {
  @apply h-[135px] bg-white mb-0.5 p-[15px] flex items-center hover:bg-slate-100 rounded;

  &-image {
    @apply h-full min-w-[95px] flex justify-center items-center;
  }

  &-description {
    @apply h-full w-full text-[18px] font-[Hind] leading-[21px] uppercase text-[#95A5A6] flex flex-col justify-center;
  }
}

.no-products {
  @apply h-[135px] w-full flex justify-center items-center;
}
</style>
