import { createApp } from "vue"; // 
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
