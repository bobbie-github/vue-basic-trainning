import { createRouter, createWebHistory } from 'vue-router'

import authState from '../auth.js'
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
            component: ()=>import('../components/HelloWorld.vue'),
            meta: { requiresAuth: true,requiresRole: 'user' }
        },
        {
            path: '/admin',
            name:'admin',
            component: ()=>import('../components/admin.vue'),
            meta: { requiresAuth: true, requiresRole: 'admin' }
        },
        {
            path: '/component-url/:user_id',
            name:'cpn',
            component: ()=>import('../components/cpn.vue'),
            meta: { requiresAuth: true,requiresRole: 'user' }
        },
        {
            path: '/syntax',
            name:'syntax',
            component: ()=>import('../components/Syntax.vue')

        },
        {
            path: '/unauthorized',
            name:'unauthorized',
            component: ()=>import('../components/unauthorized.vue')
        },
        {
            path: '/login',
            name:'login',
            component: ()=>import('../components/login.vue')
        },
        {
            path: '/provide_inject',
            name:'provide_inject',
            component: ()=>import('../components/provide_inject.vue'),
        },
        {
            path: '/state_manage',
            name:'state_manage',
            component: ()=>import('../components/state_manage/index.vue'),
        },

    ]
})
router.beforeEach((to, from, next) => {
    console.log(to.meta)
    if (to.meta.requiresAuth) {
        if (!authState.isAuthenticated.value) {
            next('/login');
            return;
        }
    }

    if (to.meta.requiresRole) {
        if (authState.user.value !== to.meta.requiresRole) {
            next('/unauthorized');
            return;
        }
    }

    // If authenticated and no role mismatch, continue navigation
    if (authState.isAuthenticated.value) {
        if (authState.user.value === 'admin') {
            if (to.path !== '/admin') {
                next('/admin');
                return;
            }
        }
    }


    // Continue navigation for public routes and other cases
    next();
});

export default router