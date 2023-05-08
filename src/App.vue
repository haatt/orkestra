<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
.fade-enter-active .inner,
.fade-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from .inner,
.fade-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

.fade-enter-active .inner {
  transition-delay: 0.25s;
}
</style>
