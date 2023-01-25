<script setup lang="ts">
import PreguntaComponent from '@/components/PreguntaComponent.vue'
const doc= {
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
      }
    
</script>
<template>
    <PreguntaComponent :doc="doc"/>
</template>


<style scoped>

</style>