<script setup>
import { useVehiculos } from '../composables/useVehiculos';

const { stepStore,
        vehiculoSeleccionado,
        selectedVehiculo,
        selectedTipo,
        selectedMarca,
        selectedModelo,
        vehiculos,
        tipos,
        marcas,
        modelos,
        onVehiculoChange } = useVehiculos()

</script>

<template>
    
    <Card class="w-8"> 

        <template v-slot:title>
            Vehículo 
        </template>

        <template v-slot:subtitle>
            Ingrese por favor la informacion solicitada
        </template>

        <template v-slot:content>
           
            <div class="grid">
                <!-- Vehiculos -->
                <div class="col">
                    <h5>Vehículos</h5>
                    <Dropdown class="col-6 w-full" v-model="selectedVehiculo"  @change="onVehiculoChange"
                            :options="vehiculos" optionLabel="name" :filter="true"
                                placeholder="Seleccione un Vehiculo" :showClear="true">
                        
                        <template #value="slotProps">
                            <div class="country-item country-item-value" v-if="slotProps.value">
                                
                                <div>{{slotProps.value.name}}</div>
                            </div>
                            <span v-else>
                                {{slotProps.placeholder}}
                            </span>
                        </template>

                        <template #option="slotProps">
                            <div class="country-item">
                                
                                <div>{{slotProps.option.name}}</div>
                            </div>
                        </template>

                    </Dropdown>
                </div>
                <!-- Tipo de Vehiculos -->
                <div class="col">
                    <h5>Tipo de Vehículo</h5>
                    <Dropdown class="col-6 w-full" v-model="selectedTipo" 
                        :options="tipos" optionLabel="name" :filter="true"
                        placeholder="Seleccione tipo de Vehiculo" :showClear="true">
                            
                        <template #value="slotProps">
                            <div class="country-item country-item-value" v-if="slotProps.value">
                                
                                <div>{{slotProps.value.name}}</div>
                            </div>
                            <span v-else>
                                {{slotProps.placeholder}}
                            </span>
                        </template>

                        <template #option="slotProps">
                            <div class="country-item">
                                
                                <div>{{slotProps.option.name}}</div>
                            </div>
                        </template>

                    </Dropdown>
                </div>
            </div>
            <div class="grid">
                <!-- seleccione marca -->
                <div class="col">
                    <h5>Marca del Vehículo</h5>
                    <Dropdown class="col-6 w-full" v-model="selectedMarca" 
                                :options="marcas" optionLabel="name" :filter="true"
                                    placeholder="Seleccione modelo de Vehiculo" :showClear="true">
                            
                            <template #value="slotProps">
                                <div class="country-item country-item-value" v-if="slotProps.value">
                                    
                                    <div>{{slotProps.value.name}}</div>
                                </div>
                                <span v-else>
                                    {{slotProps.placeholder}}
                                </span>
                            </template>

                            <template #option="slotProps">
                                <div class="country-item">
                                    
                                    <div>{{slotProps.option.name}}</div>
                                </div>
                            </template>

                    </Dropdown>
                </div>
                <!-- seleccione modelos -->
                <div class="col">
                    <h5>Modelo del Vehículo</h5>
                    <Dropdown class="col-6 w-full" v-model="selectedModelo" 
                            :options="modelos" optionLabel="name" :filter="true"
                                placeholder="Seleccione modelo de Vehiculo" :showClear="true">
                        
                        <template #value="slotProps">
                            <div class="country-item country-item-value" v-if="slotProps.value">
                                
                                <div>{{slotProps.value.name}}</div>
                            </div>
                            <span v-else>
                                {{slotProps.placeholder}}
                            </span>
                        </template>

                        <template #option="slotProps">
                            <div class="country-item">
                                
                                <div>{{slotProps.option.name}}</div>
                            </div>
                        </template>

                    </Dropdown>
                </div>
           </div>
           <div class="grid">
                <div class="col-6 mt-3" v-if="vehiculoSeleccionado!=='Bicicleta'">
                    <h5>Dominio del Vehiculo</h5>
                    <InputText type="text" class="col-6 w-full" v-model="value" />
                </div>
         
           
                <div class="col mt-3">
                    <h5>Color del Vehiculo</h5>
                    <InputText type="text" class="col-6 w-full" v-model="value" />
                </div>
           </div>
           
           
        
        </template>
        <template v-slot:footer>
            <div class="grid grid-nogutter justify-content-between">
                <!-- <Button label="Editar"  icon="pi pi-pencil" class="p-button-warning"/> -->
                
            </div>
        </template>
    </Card>
</template>



<style lang="scss" scoped>

</style>