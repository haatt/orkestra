<template>
  <div class="search-view">
    <CardContainer
      :show-header="showHeader"
      :background-color="backgroundColor"
    >
      <template #header>
        <ProductsHeader />
      </template>

      <template #body>
        <template v-if="!showScanner">
          <CustomInput
            placeholder="Buscar Producto"
            class="mt-[23px]"
            @onWriting="onWriting"
            @onShowScanner="onShowScanner"
          />

          <div class="w-full text-right my-3">
            <button type="button" class="text-[#2780BA] underline">
              Filtros
            </button>
          </div>

          <ListProducts :products-list="products" />
        </template>

        <template v-else>
          <div class="w-full">
            <button
              @click="onShowScanner"
              type="button"
              class="text-[#2780BA] font-bold flex justify-start items-center m-3"
            >
              <LeftArrowIcon class="w-[27px] h-[17]" />
              <p class="ml-1 text-xl">Regresar</p>
            </button>

            <span class="font-bold text-xl m-3">Escanea el código</span>
          </div>
        </template>
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
import LeftArrowIcon from "@/components/shared/components/icons/LeftArrowIcon.vue";

import type { BrandFormData } from "@/components/products/services/ProductService.types";
import type { AxiosResponse } from "axios";

const store = useStore();

const products = ref([] as BrandFormData[]);
const textToSearch = ref("");
const showScanner = ref(false);

const bearerToken = computed(() => store.getters.getToken);
const showHeader = computed(() => textToSearch.value === "");
const backgroundColor = computed(() =>
  showScanner.value ? "#FFFFFF" : "#E3E9EE"
);

onMounted(async function (): Promise<void> {
  await fetchProducts();
});

watch(textToSearch, () => fetchProducts());

const onWriting = async function (text: string): Promise<void> {
  textToSearch.value = text;
};
const onShowScanner = function (): void {
  showScanner.value = !showScanner.value;
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
