<template>
  <div class="products-header" :style="backgroundSvg">
    <div class="box-icon-container">
      <OrkestraIcon class="max-w-[34px]" />
    </div>

    <div class="brand-name">
      <OrkestraBrandIcon class="max-w-[132px]" />
    </div>

    <div class="box-icon-container left-gray-border">
      <AvatarIcon class="max-w-[36px]" />
    </div>

    <div class="box-icon-container left-gray-border">
      <CartIcon class="max-w-[37px]" />
    </div>

    <div class="box-icon-container left-gray-border">
      <NewNotificationIcon class="max-w-[45px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import OrkestraIcon from "@/components/shared/components/icons/OrkestraIcon.vue";
import OrkestraBrandIcon from "@/components/shared/components/icons/OrkestraBrandIcon.vue";
import AvatarIcon from "@/components/shared/components/icons/AvatarIcon.vue";
import CartIcon from "@/components/shared/components/icons/CartIcon.vue";
import NewNotificationIcon from "@/components/shared/components/icons/NewNotificationIcon.vue";

import BackgroundHeader from "@/assets/images/backgrounds/background-header.svg";

const backgroundSvg = computed(() => {
  return `background-image: url(${BackgroundHeader});`;
});
</script>

<style lang="scss" scoped>
.products-header {
  @apply w-full max-h-[60px] flex flex-row bg-repeat-x;
}

.box-icon-container {
  @apply h-[60px] min-w-[60px] flex justify-center items-center;
}

.left-gray-border {
  @apply border-l-2 border-gray-800;
}

.brand-name {
  @apply h-[60px] w-full border-l-2 border-[#E3E9EE] flex justify-start items-center px-[12px];
}
</style>
