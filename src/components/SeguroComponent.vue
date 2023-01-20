
<template>
    <div class="stepsdemo-content">
        <Card class="miCard">
            <template v-slot:title>
                Seguro
            </template>
            <template v-slot:subtitle>
                Ingrese por favor la informacion solicitada
            </template>
            <template v-slot:content>
                <div class="field-checkbox">
                    <Checkbox inputId="binary" v-model="checked" :binary="true" />
                    <label for="binary">{{
                            (checked)? 'Posee cedula verde' : 'No posee cedula verde'
                        }}
                    </label>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Volver" @click="prevPage()" icon="pi pi-angle-left" />
                    <Button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" class="p-button-success"/>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cedulaverde:'',
            submitted: false,
            validationErrors: {},
            checked:false
        }
    },
    methods: {
        prevPage() {
            this.$router.push({ name: 'rto' })
        },
        complete() {
           /*  this.$router.push({ path: 'licenciaConducir' }) */
        },
        /* validateForm() {
            if (!this.firstname.trim())
                this.validationErrors['firstname'] = true;
            else
                delete this.validationErrors['firstname'];

            if (!this.lastname.trim())
                this.validationErrors['lastname'] = true;
            else
                delete this.validationErrors['lastname'];

            return !Object.keys(this.validationErrors).length;
        } */
    }
}
</script>
<style>
.miCard{
    width: 50em;
}
</style>