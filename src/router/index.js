/**
 * * "Vue Router" merupakan library pendukung yang secara official dari Vue JS, yang mana digunakan untuk membuat sebuah route di dalam aplikasi Vue dengan lebih cepat dan SPA / Single Page Application.
 * * `createRouter` akan digunakan untuk membuat konfigurasi sebuah router di dalam "Vue Router"
 * * `createWebHistory` digunakan untuk membuat URL dari Vue Router menjadi lebih friendly
 */

// Import vue router
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

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
	{
		path: "/dashboard",
		name: "dashboard",
		component: () => import("../views/dashboard/Index.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/donation",
		name: "donation.index",
		component: () => import("../views/donation/Index.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("../views/profile/Index.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/profile/password",
		name: "profile.password",
		component: () => import("../views/profile/Password.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/",
		name: "home",
		component: () => import("../views/home/Index.vue"),
		meta: {},
	},
	{
		path: "/category",
		name: "category.index",
		component: () => import("../views/category/Index.vue"),
	},
	{
		path: "/category/:slug",
		name: "category.show",
		component: () => import("../views/category/Show.vue"),
	},
	{
		path: "/campaign",
		name: "campaign.index",
		component: () => import("../views/campaign/Index.vue"),
	},
	{
		path: "/campaign/:slug",
		name: "campaign.show",
		component: () => import("../views/campaign/Show.vue"),
	},
	{
		path: "/donation/create/:slug",
		name: "donation.create",
		component: () => import("../views/donation/Create.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/search",
		name: "search",
		component: () => import("../views/search/Index.vue"),
	},
];

// Buat router
const router = createRouter({
	history: createWebHistory(),
	routes, // <-- routes
});

router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		// Cek nilai dari getters `isLoggedIn` di module auth
		if (authStore.isLoggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});

export default router;
