<script setup>
import VehiculoComponent from '../components/VehiculoComponent.vue';
import ProtagonistasComponent from '../components/ProtagonistasComponent.vue';
import { useApp } from "../composables/useApp"
import { useStepsStore } from '../store/stepsStore'
import { storeToRefs } from 'pinia';

const {router,items,formObject,nextPage,prevPage,complete} = useApp();
/* store */
const stepStore = useStepsStore();
const {stepsCard,vehiculoSeleccionado} = storeToRefs(stepStore)

</script>
<template>
    <div class="consulta">
     <Toast />
     <VehiculoComponent class="mb-3"/>

     <div class="card w-8" v-if="stepsCard && vehiculoSeleccionado!='Bicicleta'" >
        <Steps :model="items" :readonly="true" aria-label="Form Steps" />
     </div>

     <router-view v-if="vehiculoSeleccionado!='Bicicleta'"
        v-slot="{Component}" :formData="formObject" 
        @prevPage="prevPage($event)" 
        @nextPage="nextPage($event)" 
        @complete="complete">
         <keep-alive>
             <component :is="Component" />
         </keep-alive>
     </router-view>

     <ProtagonistasComponent class="mt-5 w-8"/>
    
    </div>
</template>



<style lang="scss" scoped>

</style>