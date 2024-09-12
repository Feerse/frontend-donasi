import { createApp } from "vue";
import App from "./App.vue";

/**
 * Import Tailwind CSS
 */
import "./style.css";

/**
 * Import Toasttification
 */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Create App Vue
const app = createApp(App);

// Gunakan "Toast" di Vue JS dengan plugin "use"
app.use(Toast);

app.mount("#app");
