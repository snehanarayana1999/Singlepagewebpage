import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/Search.vue';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import Login from '../views/Login'


const routes = [{
        path: '/search',
        name: 'Search',
        component: Search,
        children: [{
            path: '/login',
            name: 'Login',
            component: Login,
        }]

    },
    {
        path: '/home',
        name: 'Home',
        component: Home

    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard

    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings

    },

]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: 'active',
});


export default router