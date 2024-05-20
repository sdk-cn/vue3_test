import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue';

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
            component: News,
            children: [
                {
                    path: 'detail/:id/:content/:title',
                    name: 'xiang',
                    component: Detail
                }
            ]
        },
        {
            path: '/about',
            name: 'guanyu',
            component: About
        }
    ]
})
export default router