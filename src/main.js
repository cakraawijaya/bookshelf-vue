import { createApp } from 'vue';

import MainApp from './App.vue';
import router from './router.js';

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(MainApp).use(router).mount('#app');