import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ()=>import('../components/home.vue')
        },
        {
            path: '/hello',
            name:'hello',
            component: ()=>import('../components/HelloWorld.vue')
        } ,
        {
            path: '/component-url/:user_id',
            name:'cpn',
            component: ()=>import('../components/cpn.vue')
        }
    ]
})

export default router