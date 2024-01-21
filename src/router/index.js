// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import hello2 from '../components/hello/hello2.vue'
import home from '../components/home/home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/hello2/:num',
        name: 'hello2',
        component: hello2
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
