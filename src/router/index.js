import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name:'cedulaVerde',
      component: PreguntaComponent,
      props: {
        titulo:'Cedula Verde',
        subtitulo:'Ingrese por favor la información solicitada',
        pregunta1:'Posee Cedula Verde',
        toogleButtonDefault:'No',
        labeldescripcion:'Ingrese una descripcion:',
        vencimientoDoc:true,
        fecha:'',
        nextRoute:'cedulaAzul',
        previousRoute:'',
        nameRoute:'cedulaVerde'
      },
    },
    {
      path: '/cedulaazul',
      name:'cedulaAzul',
      component: PreguntaComponent,
      props: {
        titulo:'Cedula Azul',
        subtitulo:'Ingrese por favor la información solicitada',
        pregunta1:'Posee Cedula Azul',
        toogleButtonDefault:'No',
        labeldescripcion:'Ingrese una descripcion:',
        vencimientoDoc:true,
        fecha:'',
        nextRoute:'licenciaConducir',
        previousRoute:'cedulaVerde',
        nameRoute:'cedulaAzul'
      },
    },
    {
      path: '/licenciaconducir',
      name:'licenciaConducir',
      component: PreguntaComponent,
      props: {
        titulo:'Licencia de Conducir',
        subtitulo:'Ingrese por favor la información solicitada',
        pregunta1:'Posee Licencia de Conducir',
        toogleButtonDefault:'No',
        labeldescripcion:'Ingrese una descripcion:',
        vencimientoDoc:true,
        fecha:'',
        nextRoute:'rto',
        previousRoute:'cedulaAzul',
        nameRoute:'licenciaConducir'
      },
    },
    {
      path: '/rto',
      name:'rto',
      component: PreguntaComponent,
      props: {
        titulo:'Revisión Técnica Obligatoria',
        subtitulo:'Ingrese por favor la información solicitada',
        pregunta1:'Posee RTO',
        toogleButtonDefault:'No',
        labeldescripcion:'Ingrese una descripcion:',
        vencimientoDoc:true,
        fecha:'',
        nextRoute:'seguro',
        previousRoute:'licenciaConducir',
        nameRoute:'rto'
      },
    },
    {
      path: '/seguro',
      name:'seguro',
      component: PreguntaComponent,
      props: {
        titulo:'Seguro',
        subtitulo:'Ingrese por favor la información solicitada',
        pregunta1:'Posee Seguro',
        toogleButtonDefault:'No',
        labeldescripcion:'Ingrese una descripcion:',
        vencimientoDoc:true,
        fecha:'',
        nextRoute:'complete',
        previousRoute:'rto',
        nameRoute:'seguro'
      },
    },
    {
      path: '/complete',
      name:'complete',
      component: CompleteComponent
    }
    
  ]
})

export default router
