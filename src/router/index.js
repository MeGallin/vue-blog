// https://www.youtube.com/watch?v=30XtkPC8nHI
// REF tutorial
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import $Store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin/Admin.vue'),
    beforeEnter: (to, from, next) => {
      if ($Store.getters.isAuthenticated === false) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Registration/Registration.vue'),
    beforeEnter: (to, from, next) => {
      if ($Store.getters.isAuthenticated === false) {
        next('/login');
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
