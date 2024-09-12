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
 * Import Toasttification
 */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Create App Vue
const app = createApp(App);

// Gunakan "Mixins" di Vue JS dengan plugin "use"
app.use(mixins);

// Gunakan "Toast" di Vue JS dengan plugin "use"
app.use(Toast);

app.mount("#app");
