import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AboutMe from '../views/AboutMe.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/about-me',
        name: 'AboutMe',
        component: AboutMe
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router