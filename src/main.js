import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import VueRouter from "vue-router";

import Home from './views/Home.vue';

const routes = [
    { path: '/', component: Home },
];
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(process.env.BASE_URL),
    routes,
});

createApp(App).use(router).mount('#app');
