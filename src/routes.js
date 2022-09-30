import { createWebHistory,createRouter } from "vue-router";

import Home from './components/21.1.RoutingHome.vue'
import About from './components/21.2.RoutingAbout.vue'
import Contact from './components/21.3.RoutingContact.vue'
import Profile from './components/22.1.RoutingProfile.vue'
import PageNotFound from './components/23.1.PageNotFound.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: Home
    },
    {
        name: 'AboutPage',
        path: '/about',
        component: About
    },
    {
        name: 'ContactPage',
        path: '/contact',
        component: Contact
    },
    {
        name: 'ProfilePage',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)',
        component: PageNotFound
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;