import {ref} from 'vue'
import { IDocumentacion } from '../interfaces/IDocumentacion';

export const usePreguntas = (doc:IDocumentacion) =>{

    let chkVencida = ref(doc.vencimientoDoc);
    let toogleOpcionBtn = ref(doc.toogleButtonDefault);
    let options= ref(['No', 'Si'])
    let txtInput = ref('');
    let fecha = ref(doc.fecha)
    let nextRoute = ref(doc.nextRoute)
    let previousRoute = ref(doc.previousRoute)
    let nameRoute = ref(doc.nameRoute)
   
    
    return{
        chkVencida,
        toogleOpcionBtn,
        options,
        txtInput,fecha,
        nextRoute,
        previousRoute,
        nameRoute
    }
}