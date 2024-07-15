import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);//注册全局

const routes = [{
        path: '/',
        redirect: '/welcome'
    },{
        path: '/welcome',
        name: 'Welcome',
        meta: { show: true },
        component: () => import('@/views/welcome'),
    },{
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home'),
    },{
        path: '/jingdong',
        name: 'jingdong',
        component: () => import('@/views/jingdong'),
    },{
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: () => import('@/views/shoppingCart'),
    }
]

//创建路由对象
const router = new VueRouter({
    routes
})

export default router