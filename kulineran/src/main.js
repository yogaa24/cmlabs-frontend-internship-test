// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue3 } from 'bootstrap-vue-3';

// Import Bootstrap and BootstrapVue3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Create Vue app
const app = createApp(App);

// Install BootstrapVue3
app.use(BootstrapVue3);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
