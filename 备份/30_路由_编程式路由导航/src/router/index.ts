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
                    path: 'detail',
                    name: 'xiang',
                    component: Detail,
                    // props-params写法
                    // props: true

                    // props-query写法
                    props(route){
                        return route.query
                    }
                    // 对象写法
                    // props:{
                    //     a:200,
                    //     b:100,
                    //     c:30
                    // }
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