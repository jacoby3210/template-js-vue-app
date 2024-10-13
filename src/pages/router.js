import { createRouter, createWebHistory } from 'vue-router';
import TestRoom from './test-room/TestRoom.vue'
// ------------------------------------------------------------------------- //
// Main Application Router.
// Using router to control navigation through application pages.
// ------------------------------------------------------------------------- //

const routes = [
  {component: TestRoom, name: 'Showcase', path: `/`,},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
  scrollBehavior(to, from, savedPosition) {return (savedPosition) ? savedPosition : { top: 0 };},
});

export default router;

// ------------------------------------------------------------------------- //