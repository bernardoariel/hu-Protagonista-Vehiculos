import { computed, ref } from "vue";
import { defineStore } from "pinia";


export const usePreguntasStepsStore = defineStore('preguntasSteps', ()=>{
    
    const stepsCard = ref<boolean>(true);
   
    
    return {
        //state Properties
        stepsCard,
        changeStepsCard: () => stepsCard.value = !stepsCard.value,

    }
})