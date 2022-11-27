import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './css/common.css'
import './css/reset.css'
import './css/index.css'
import App from './App.vue'
import router from "./router";

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
