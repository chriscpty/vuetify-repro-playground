import {createRouter, createWebHistory} from 'vue-router';
import MainPage from '@/components/MainPage.vue';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        component: MainPage,
        name: 'main-page'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
