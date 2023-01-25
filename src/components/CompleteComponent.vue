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
                    <Column field="acreditacion" header="Documentacion"></Column>
                    <Column field="posee" header="Posee"></Column>
                    <Column field="vencido" header="Vencido"></Column>
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
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const documentos = [ 
                {
                    'acreditacion':'Cedula Verde',
                    'posee':'SI',
                    'vencido':"No esta vencido",
                    'fecha': ' - - - - - - - -' ,
                    'descripcion:':''
                },
                {
                    'acreditacion':'Cedula Azul',
                    'posee':'NO',
                    'vencido':"No esta vencido",
                    'fecha': ' - - - - - - - -' ,
                    'descripcion:':''
                },
                {
                    'acreditacion':'Licencia de Conducir',
                    'posee':'SI',
                    'vencido':'Esta Vencido',
                    'fecha': '03-06-2022' ,
                    'descripcion:':'La lincencia no es legible'
                },
                {
                    'acreditacion':'RTO',
                    'posee':'SI',
                    'vencido':'NO',
                    'fecha': ' - - - - - - - -' ,
                    'descripcion:':''
                },
                {
                    'acreditacion':'Seguro',
                    'posee':'SI',
                    'vencido':'No está vencido',
                    'fecha': ' - - - - - - - -' ,
                    'descripcion:':''
                }
            ]
    let reiniciarForm = () =>{
        router.push ({name:'cedulaVerde'})
    }
</script>


<style lang="scss" scoped>

</style>