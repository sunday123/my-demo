// router/index.js
import {createRouter, createWebHistory} from 'vue-router'
import hello2 from '../components/hello/hello2.vue'
import home from '../components/home/home.vue'
import login from '../components/user/login.vue'

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
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
