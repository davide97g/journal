import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("./views/Home.vue") },
  {
    path: "/calendar",
    name: "Calendar",
    component: () => import("./views/Calendar.vue"),
  },
  {
    path: "/new/:date?",
    name: "New",
    component: () => import("./views/New.vue"),
  },
  {
    path: "/edit/:date",
    name: "Edit",
    component: () => import("./views/Edit.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
