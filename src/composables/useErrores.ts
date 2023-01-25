import {ref} from 'vue'

export const useErrores = () =>{

    let submitted = ref<boolean>(false);
    let error = ref<boolean>(false);

    return{
        submitted,
        error
    }
}