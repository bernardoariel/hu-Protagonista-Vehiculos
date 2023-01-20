<template>
    <div class="consulta">
        <Toast />

        <div class="card" v-if="!completeDatos">
            <Steps :model="items" :readonly="true" aria-label="Form Steps" />
        </div>

        <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';

export default {
    setup() {
        const router = useRouter();
        const toast = useToast();
        let completeDatos = ref(false)
        const items = ref([
            {
                label: 'Cédula Verde',
                to: "/"
            },
            {
                label: 'Cédula Azul',
                to: "/cedulaazul",
            },
            {
                label: 'Licencia de Conducir',
                to: "/licenciaconducir",
            },
            {
                label: 'RTO',
                to: "/rto",
            },
            {
                label: 'Seguro',
                to: "/seguro",
            }
        ]);
        const formObject = ref({});

        const nextPage = (event) => {
            console.log(event)
            for (let field in event.formData) {
                formObject.value[field] = event.formData[field];
            }

            router.push(items.value[event.pageIndex + 1].to);
        };
        const prevPage = (event) => {
            router.push(items.value[event.pageIndex - 1].to);
        };
        const complete = () => {
            toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + formObject.value.firstname + ' ' + formObject.value.lastname + ' your order completed.'});
        };

        return { items, formObject, nextPage, prevPage, complete }

        
    }
}
</script>

<style scoped lang="scss">
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
.card {
        background: var(--surface-card);
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        width: 50em;
    }
</style>

