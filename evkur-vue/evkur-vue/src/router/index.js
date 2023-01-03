import { createRouter, createWebHistory } from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import Sepetim from '../views/Sepetim.vue'
import UyeGirişi from '../views/UyeGirişi.vue'
import UyeOl from '../views/UyeOl.vue'
import Search from '../views/Search.vue'
import UrunDetayi from '../views/UrunDetayi.vue'

const routes = [{
        path: '/',
        name: 'anasayfa',
        component: Anasayfa
    },
    {
        path: '/sepetim',
        name: 'sepetim',
        component: Sepetim
    },
    {
        path: '/uye-girişi',
        name: 'uyegirişi',
        component: UyeGirişi
    },
    {
        path: '/UyeOl',
        name: 'uyeol',
        component: UyeOl
    },
    {
        path: '/:data',
        name: 'data',
        component: Search
    },
    {
        path: '/UrunDetayi/:data/:id',
        name: 'UrunDetayi',
        component: UrunDetayi
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router