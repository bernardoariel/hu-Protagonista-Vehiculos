
<template>
    <div class="stepsdemo-content">
    
        <Card style="width:50em"> 
            <template v-slot:title>
                Cedula Verde
            </template>

            <template v-slot:subtitle>
                Ingrese por favor la informacion solicitada
            </template>

            <template v-slot:content>
                
                <div class="grid">
                
                    <div class="field-checkbox col">

                        <Checkbox inputId="binary" v-model="checked" :binary="true" />

                        <label for="binary">{{
                                (checked)? 'Posee cedula verde' : 'No posee cedula verde'
                            }}
                        </label>

                    </div>

                    <div class="col" v-if="checked">

                       
                        <ToggleButton v-model="chkVencida" 
                        inputClass="success"
                        onLabel="No Esta Vencida" 
                        offLabel="Está Vencida" 
                        onIcon="pi pi-thumbs-up" 
                        offIcon="pi pi-thumbs-down" 
                        class="w-full sm:w-15rem"
                        aria-label="do you confirm" />

                    </div>
                </div>
                
                <label for="">Ingrese una descripcion:</label>
                <div class="grid">
                    <div class="field col">
                    
                        <Textarea v-model="value" rows="3" cols="40" />
                    </div>
                    <div class="col" v-if="!chkVencida">
                        <label for="fechaVencimiento">Se venció en :</label><br>
                        <Calendar class="mt-3"
                            inputId="basic" v-model="fecha" autocomplete="off" dateFormat="mm-dd-yy" :showIcon="true"/>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    
                    <!-- <Button label="Siguiente" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" /> -->
                    <Button label="Siguiente" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
                </div>
            </template>

        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
         
            submitted: false,
            validationErrors: {},
            checked:false,
            chkVencida:true,
            fecha:''
        }
    },
    methods: {
        nextPage() {
            this.$router.push({ name: 'cedulaAzul' })
        },
       
        validateForm() {
            if (!this.firstname.trim())
                this.validationErrors['firstname'] = true;
            else
                delete this.validationErrors['firstname'];

            if (!this.lastname.trim())
                this.validationErrors['lastname'] = true;
            else
                delete this.validationErrors['lastname'];

            return !Object.keys(this.validationErrors).length;
        }
    }
}
</script>
<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>
