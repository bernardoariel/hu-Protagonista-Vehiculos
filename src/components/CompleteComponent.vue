<script setup lang="ts">
import { useComplete } from '../composables/useComplete';

/* datos y funciones del complete */
const { documentos, reiniciarForm } = useComplete()
    
</script>

<template>
    <div class="stepsdemo-content">
  
        <Card class="w-8"> 

            <template v-slot:title>
                Datos Ingresados de la Documentación Obligatoria
            </template>

            <template v-slot:subtitle>
                Mostrando la informacion solicitada
            </template>

            <template v-slot:content>

                <DataTable :value="documentos" responsiveLayout="scroll">
                    <Column field="acreditacion" header="Tipo"></Column>
                    <Column field="posee" header="Documentacion"></Column>
                    <Column field="vencido" header="Estado"></Column>
                    <Column field="fecha" header="Fecha Vencimiento"></Column>
                    <Column field="descripcion" header="Descripcion"></Column>
                </DataTable>
               
            </template>

            <template v-slot:footer>

                <div class="grid grid-nogutter justify-content-between">

                    <Button label="Editar" @click="reiniciarForm()"  icon="pi pi-pencil" class="p-button-warning"/>
                    
                </div>

            </template>
            
        </Card>
    </div>
</template>



<style lang="scss" scoped>

</style>