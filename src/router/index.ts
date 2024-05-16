import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        withHeader: true
      },
      component: () => import('@/views/LegoHome.vue')
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('@/views/LegoEditor.vue')
    },
    {
      path: '/details/:id',
      name: 'Details',
      meta: {
        withHeader: true
      },
      component: () => import('@/views/TemplateDetail.vue')
    }
  ]
})

export default router
