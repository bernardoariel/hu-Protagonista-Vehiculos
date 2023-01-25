<script setup lang="ts">
import PreguntaComponent from '@/components/PreguntaComponent.vue'
const doc= {
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
      }
    
</script>
<template>
    <PreguntaComponent :doc="doc"/>
</template>


<style scoped>

</style>