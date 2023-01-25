<script setup lang="ts">
import {defineProps} from 'vue'
import { useRouter } from 'vue-router';
import { usePreguntas } from "../composables/usePreguntas"
import { useErrores } from "../composables/useErrores"
import type { IDocumentacion } from "../interfaces/IDocumentacion";
const router = useRouter();

const props = defineProps({
    doc: Object as () => IDocumentacion,
});
const {doc} = props;

/* preguntas */
 const { 
     chkVencida, 
     toogleOpcionBtn , 
     options, 
     txtInput,
     fecha, 
     nextRoute, 
     previousRoute, 
     nameRoute} = usePreguntas(doc!);
/* errores */

const { submitted,error } = useErrores();
const nextPage = () => {

        submitted.value = true;
        
        if (!fecha.value && !chkVencida.value) {
            // this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 0});
            error.value= true
            return
        }
        router.push({ name: nextRoute.value })
    }
const prevPage = () =>{
        router.push({ name: previousRoute.value })
    }

</script>
<template>
    <div class="stepsdemo-content">
    
        <Card class="w-8"> 
            <template v-slot:title>
                <span class="ml-3">{{doc?.titulo}}</span>    
               
            </template>

            <template v-slot:subtitle>
                <span class="ml-3">{{doc?.subtitulo}}</span>
            </template>

            <template v-slot:content>
                
                <div class="grid ml-3">
                
                    <div class="col">
                        <h5>Posee Cedula Verde</h5>
                        <SelectButton 
                            class="mb-3" 
                            v-model="toogleOpcionBtn" 
                            :options="options" 
                            aria-labelledby="single" />
                    </div>

                    <div class="col" v-if="toogleOpcionBtn=='Si'">

                        <h5>Seleccione el Vencimiento</h5>
                        <ToggleButton v-model="chkVencida" 
                            inputClass="success"
                            onLabel="No Esta Vencida" 
                            offLabel="Está Vencida" 
                            onIcon="pi pi-thumbs-up" 
                            offIcon="pi pi-thumbs-down" 
                            class="w-full sm:w-15rem"
                            :class="chkVencida ? 'bg-green-500 border-green-500 text-white': 'bg-red-500 border-red-500 text-white'"
                            aria-label="do you confirm" />

                    </div>
                </div>
                
                <label class="ml-5">Ingrese una descripcion:</label>
                <div class="grid mt-2">
                    <div class="field col ml-5">
                    
                        <Textarea v-model="txtInput" rows="3" cols="40" />

                    </div>
                    <div class="col" v-if="!chkVencida">
                        <label for="fechaVencimiento">Se venció en :</label><br>
                        <Calendar 
                            class="mt-3"
                            :class="{'p-invalid':error && submitted}" 
                            inputId="basic" v-model="fecha" autocomplete="off"
                            dateFormat="mm-dd-yy" :showIcon="true"
                            @blur="error=false"
                            />
                        <br>
                        <small v-show="error" class="text-red-300">Este dato es requerido.</small>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    
                    <Button label="Volver" icon="pi pi-angle-left" :disabled="!previousRoute"/>
                    <Button label="Siguiente" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />

                </div>
            </template>

        </Card>
    </div>
</template>


<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>

function doc(doc: any): { chkVencida: any; toogleOpcionBtn: any; options: any; txtInput: any; fecha: any; nextRoute: any; previousRoute: any; nameRoute: any; } {
  throw new Error('Function not implemented.');
}

function doc(doc: any): { chkVencida: any; toogleOpcionBtn: any; options: any; txtInput: any; fecha: any; nextRoute: any; previousRoute: any; nameRoute: any; } {
  throw new Error('Function not implemented.');
}
