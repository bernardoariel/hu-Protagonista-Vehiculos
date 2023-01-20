import { createRouter, createWebHistory } from 'vue-router'
import CedulaVerdeComponent from '../components/CedulaVerdeComponent.vue'
import CedulaAzulComponent from '../components/CedulaAzulComponent.vue'
import LicenciaConducirComponent from '../components/LicenciaConducirComponent.vue'
import RtoComponent from '../components/RtoComponent.vue'
import SeguroComponent from '../components/SeguroComponent.vue'
import CompleteComponent from '../components/CompleteComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'cedulaVerde',
      component: CedulaVerdeComponent
    },
    {
      path: '/cedulaazul',
      name:'cedulaAzul',
      component: CedulaAzulComponent
    },
    {
      path: '/licenciaconducir',
      name:'licenciaConducir',
      component: LicenciaConducirComponent
    },
    {
      path: '/rto',
      name:'rto',
      component: RtoComponent
    },
    {
      path: '/seguro',
      name:'seguro',
      component: SeguroComponent
    },
    {
      path: '/complete',
      name:'complete',
      component: CompleteComponent
    }
    
  ]
})

export default router
