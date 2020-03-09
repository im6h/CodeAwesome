import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('../views/Error/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/posts',
    name: 'ListPost',
    component: () => import('../views/ListPost.vue'),
  },
  {
    path: '/posts/:id',
    name: 'DetailPost',
    component: () => import('../views/DetailPost.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
