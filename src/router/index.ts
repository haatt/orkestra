import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import SearchView from "@/views/SearchView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "searchView",
    component: SearchView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
