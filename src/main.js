import { createApp } from "vue";
import App from "./App.vue";

/**
 * Import Tailwind CSS
 */
import "./style.css";

/**
 * Import Mixins
 */
import mixins from "./mixins";

/**
 * Import Vue Router
 */
import router from "./router";

/**
 * Import Toasttification
 */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

/**
 * Import Pinia
 */
import { createPinia } from "pinia";

// Create App Vue
const app = createApp(App);

// Create Pinia
const pinia = createPinia();

app.mixin(mixins);
app.use(router);
app.use(Toast);
app.use(pinia);
app.mount("#app");
