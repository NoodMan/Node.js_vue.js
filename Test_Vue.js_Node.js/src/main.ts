import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.mount("#app");