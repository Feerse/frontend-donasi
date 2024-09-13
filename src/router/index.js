/**
 * * "Vue Router" merupakan library pendukung yang secara official dari Vue JS, yang mana digunakan untuk membuat sebuah route di dalam aplikasi Vue dengan lebih cepat dan SPA / Single Page Application.
 * * `createRouter` akan digunakan untuk membuat konfigurasi sebuah router di dalam "Vue Router"
 * * `createWebHistory` digunakan untuk membuat URL dari Vue Router menjadi lebih friendly
 */

// Import vue router
import { createRouter, createWebHistory } from "vue-router";

// Definisikan sebuah rute
const routes = [
  {
    path: "/register",
    name: "register",
    component: () => import("../views/auth/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/auth/Login.vue"),
  },
];

// Buat router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes
});

export default router;
