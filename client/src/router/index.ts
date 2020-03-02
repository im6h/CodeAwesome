import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
