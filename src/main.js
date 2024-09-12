import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Create App Vue
const app = createApp(App);

// Gunakan "Toast" di Vue JS dengan plugin "use"
app.use(Toast);

app.mount("#app");
