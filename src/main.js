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

// Create App Vue
const app = createApp(App);

app.use(mixins);
app.use(router);
app.use(Toast);
app.mount("#app");
