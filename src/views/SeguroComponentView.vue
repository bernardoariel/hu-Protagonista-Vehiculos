<script setup lang="ts">
import PreguntaComponent from '@/components/PreguntaComponent.vue'
const doc= {
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

      }
    
</script>
<template>
    <PreguntaComponent :doc="doc"/>
</template>


<style scoped>

</style>