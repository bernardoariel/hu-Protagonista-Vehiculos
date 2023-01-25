import { createRouter, createWebHistory } from 'vue-router'
import CedulaVerdeView  from "@/views/CedulaVerdeView.vue";
import CedulaAzulView  from "@/views/CedulaAzulView.vue";
import LicenciaConducirView  from "@/views/LicenciaConducirView.vue";
import RtoComponentView  from "@/views/RtoComponentView.vue";
import SeguroComponentView  from "@/views/SeguroComponentView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name:'cedulaVerde',
      component: CedulaVerdeView,
    },
    {
      path: '/cedulaazul',
      name:'cedulaAzul',
      component: CedulaAzulView,
    },
    {
      path: '/licenciaconducir',
      name:'licenciaConducir',
      component: LicenciaConducirView,
    },
    {
      path: '/rto',
      name:'rto',
      component: RtoComponentView,
    },
    {
      path: '/seguro',
      name:'seguro',
      component: SeguroComponentView,
    }
  ]
})

export default router
