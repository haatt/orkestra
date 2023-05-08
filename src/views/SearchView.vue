<template>
  <div class="search-view">
    <CardContainer>
      <template #header>
        <ProductsHeader />
      </template>

      <template #body>
        <CustomInput
          placeholder="Buscar Producto"
          class="mt-[23px]"
          @onWriting="searchText"
        />

        <div class="w-full text-right my-3">
          <button type="button" class="text-[#2780BA] underline">
            Filtros
          </button>
        </div>

        <ListProducts :products-list="products" />
      </template>
    </CardContainer>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import axios from "axios";

import CardContainer from "@/components/core/CardContainer.vue";
import ProductsHeader from "@/components/products/ProductsHeader.vue";
import CustomInput from "@/components/core/CustomInput.vue";
import ListProducts from "@/components/products/ListProducts.vue";

import type { BrandFormData } from "@/components/products/services/ProductService.types";
import type { AxiosResponse } from "axios";

const products = ref([] as BrandFormData[]);
const store = useStore();
const bearerToken = computed(() => store.getters.getToken);
const textToSearch = ref("");

onMounted(async function (): Promise<void> {
  await fetchProducts();
});

watch(textToSearch, () => fetchProducts());

const searchText = async function (text: string): Promise<void> {
  textToSearch.value = text;
};

const fetchProducts = async function (): Promise<void> {
  await axios
    .get("https://dev.orkestra.mx/api/v1/smart-cart/products", {
      headers: {
        Authorization: `Bearer ${bearerToken.value}`,
      },
      params: {
        with_selects: 0,
        page: 1,
        limit: 50,
        search: textToSearch.value ?? "",
        with_products: 1,
      },
    })
    .then((response: AxiosResponse) => {
      products.value = response.data.products.data as BrandFormData[];
    });
};
</script>
