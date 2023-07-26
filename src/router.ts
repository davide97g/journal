import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./views/Home.vue") },
  { path: "/calendar", component: () => import("./views/Calendar.vue") },
  { path: "/new", component: () => import("./views/New.vue") },
  { path: "/about", component: () => import("./views/About.vue") },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
