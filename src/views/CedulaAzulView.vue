<script setup lang="ts">
import PreguntaComponent from '@/components/PreguntaComponent.vue'
const doc= {
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
      }
    
</script>
<template>
    <PreguntaComponent :doc="doc"/>
</template>


<style scoped>

</style>