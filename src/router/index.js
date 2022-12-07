import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue'
import Products from '@/pages/products/Products.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/products/:id',
        name: 'Products by name',
        component: Products
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;