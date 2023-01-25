import { computed, ref } from "vue";
import { defineStore } from "pinia";


export const useStepsStore = defineStore('preguntasSteps', ()=>{
    
    const stepsCard = ref<boolean>(true);
    const vehiculoSeleccionado = ref<string>('Auto')
    
    return {
        //state Properties
        stepsCard,
        changeStepsCard: () => stepsCard.value = !stepsCard.value,
        vehiculoSeleccionado
    }
})