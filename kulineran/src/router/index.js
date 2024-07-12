// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CategoryList from '@/components/CategoryList.vue';
import CategoryDetail from '@/components/CategoryDetail.vue';
import MealDetail from '@/components/MealDetail.vue';

const routes = [
  { path: '/', component: CategoryList },
  { path: '/category/:categoryName', component: CategoryDetail },
  { path: '/meal/:mealId', component: MealDetail }, // Rute untuk MealDetail.vue
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
