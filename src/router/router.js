import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: '/guardar',
        component: () => import('@/pages/GuardarEstudiante') 
    },
    {
        path: '/generar',
        component: () => import('@/pages/GenerarToken') 
    },
    {
        path:'/:pathMatch(.*)*',
        component: () => import('@/pages/NoFoundPage') 
        
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router