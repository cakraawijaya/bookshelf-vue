import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/home-page.vue';
import Katalog from './components/pages/catalog-page.vue';
import ManajemenBuku from './components/pages/management-page.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/Katalog",
        component: Katalog,
    },
    {
        path: "/Manajemen-Buku",
        component: ManajemenBuku,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;