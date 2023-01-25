<script setup lang="ts">
import PreguntaComponent from '@/components/PreguntaComponent.vue'
const doc= {
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
      }
    
</script>
<template>
    <PreguntaComponent :doc="doc"/>
</template>


<style scoped>

</style>