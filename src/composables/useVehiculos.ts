import {ref} from 'vue'
import { useStepsStore } from '../store/stepsStore'
import { storeToRefs } from 'pinia';

export const useVehiculos = () =>{

    /* store */
    const stepStore = useStepsStore();
    const {vehiculoSeleccionado} = storeToRefs(stepStore)
    
    const selectedVehiculo = ref();
    const selectedTipo = ref();
    const selectedMarca = ref();
    const selectedModelo = ref();

    const vehiculos = [
        {name: 'Auto'},
        {name: 'Moto'},
        {name: 'Bicicleta'},
        {name: 'Camioneta'},
        {name: 'Camion'}
    ]
    
    const tipos = [
            {name: 'Sedan'},
            {name: 'Hatchback'},
            {name: 'Coupe'},
            {name: 'SUV'}
        ]
     
    const marcas = [
            {name: 'Fiat'},
            {name: 'Ford'},
            {name: 'Toyota'},
            {name: 'Renault'}
        ]
     
    const modelos = [
            {name: 'Palio'},
            {name: 'Argo'},
            {name: '125'},
            {name: 'Cronos'}
        ]
    let onVehiculoChange = () =>{
        if(selectedVehiculo.value){

            vehiculoSeleccionado.value =selectedVehiculo.value.name
        }else{
            vehiculoSeleccionado.value = ''
        }
    }
               
    return{
        stepStore,
        vehiculoSeleccionado,
        selectedVehiculo,
        selectedTipo,
        selectedMarca,
        selectedModelo,
        vehiculos,
        tipos,
        marcas,
        modelos,
        onVehiculoChange
    }
}