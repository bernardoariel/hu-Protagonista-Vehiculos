<template>
    <div class="stepsdemo-content">
        
        <Card style="width:50em"> 

            <template v-slot:title>
                Datos Ingresados
            </template>

            <template v-slot:subtitle>
                Mostrando la informacion solicitada
            </template>

            <template v-slot:content>
                <DataTable :value="productos" responsiveLayout="scroll">
                    <Column field="acreditacion" header="Papeles"></Column>
                    <Column field="posee" header="Posee"></Column>
                    <Column field="vencido" header="Vencido"></Column>
                    <Column field="fecha" header="Fecha Vencimiento"></Column>
                </DataTable>
               
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Editar"  icon="pi pi-pencil" class="p-button-warning"/>
                    
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            productos:[ 
                {
                    'acreditacion':'Cedula Verde',
                    'posee':'SI',
                    'vencido':"No esta vencido",
                    'fecha': ' - - - - - - - -' ,
                },
                {
                    'acreditacion':'Cedula Azul',
                    'posee':'NO',
                    'vencido':"No esta vencido",
                    'fecha': ' - - - - - - - -' ,
                },
                {
                    'acreditacion':'Licencia de Conducir',
                    'posee':'SI',
                    'vencido':'Esta Vencido',
                    'fecha': '03-06-2022' ,
                },
                {
                    'acreditacion':'RTO',
                    'posee':'SI',
                    'vencido':'NO',
                    'fecha': ' - - - - - - - -' ,
                },
                {
                    'acreditacion':'Seguro',
                    'posee':'SI',
                    'vencido':'No está vencido',
                    'fecha': ' - - - - - - - -' ,
                }
            ],
          
        }
    },
   
}
</script>

<style lang="scss" scoped>

</style>