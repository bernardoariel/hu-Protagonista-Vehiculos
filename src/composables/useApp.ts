import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
export const useApp = () =>{

    const router = useRouter();
    const toast = useToast();
    
    const items = ref([
        {
            label: "Cédula Verde",
            to: "/"
        },
        {
            label: "Cédula Azul",
            to: "/cedulaazul",
        },
        {
            label: "Licencia de Conducir",
            to: "/licenciaconducir",
        },
        {
            label: "RTO",
            to: "/rto",
        },
        {
            label: "Seguro",
            to: "/seguro",
        }
    ]);
    const formObject = ref({});
    const nextPage = (event) => {
        console.log(event);
        for (let field in event.formData) {
            formObject.value[field] = event.formData[field];
        }
        router.push(items.value[event.pageIndex + 1].to);
    };
    const prevPage = (event) => {
        router.push(items.value[event.pageIndex - 1].to);
    };
    const complete = () => {
        toast.add({ severity: "success", summary: "Order submitted", detail: "Dear, " + formObject.value.firstname + " " + formObject.value.lastname + " your order completed." });
    };
    return{
        router,
        items,
        formObject,
        nextPage,
        prevPage,
        complete
    }
}