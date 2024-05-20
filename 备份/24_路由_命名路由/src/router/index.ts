import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

const router=createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            name: 'zhuye',
            component: Home
        },
        {
            path: '/news',
            name: 'xinwen',
            component: News
        },
        {
            path: '/about',
            name: 'guanyu',
            component: About
        }
    ]
})
export default router