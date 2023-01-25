import { useRouter } from 'vue-router';
import { useStepsStore } from '../store/stepsStore'
import { storeToRefs } from 'pinia';
export const useComplete = () =>{
    /* store */
    const stepStore = useStepsStore();
    const {stepsCard} = storeToRefs(stepStore)
    /* router */
    const router = useRouter();
    let reiniciarForm = () =>{
        stepStore.changeStepsCard()
        router.push ({name:'cedulaVerde'})
    }
    const documentos = [ 
        {
            'acreditacion':'Cedula Verde',
            'posee':'SI',
            'vencido':"Vigente",
            'fecha': ' - - - - - - - -' ,
            'descripcion:':''
        },
        {
            'acreditacion':'Cedula Azul',
            'posee':'NO',
            'vencido':' - - - - - - - -',
            'fecha': ' - - - - - - - -' ,
            'descripcion:':''
        },
        {
            'acreditacion':'Licencia de Conducir',
            'posee':'SI',
            'vencido':'Vencido',
            'fecha': '03-06-2022' ,
            'descripcion:':'La lincencia no es legible'
        },
        {
            'acreditacion':'RTO',
            'posee':'SI',
            'vencido':'Vigente',
            'fecha': ' - - - - - - - -' ,
            'descripcion:':''
        },
        {
            'acreditacion':'Seguro',
            'posee':'SI',
            'vencido':'Vigente',
            'fecha': ' - - - - - - - -' ,
            'descripcion:':''
        }
    ]

    return{
        documentos,
        reiniciarForm,
    }
}
