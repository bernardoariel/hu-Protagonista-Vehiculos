
<template>
    <div class="stepsdemo-content">
        <Card class="w-8"> 
            <template v-slot:title>
                Licencia de Conducir
            </template>

            <template v-slot:subtitle>
                Ingrese por favor la informacion solicitada
            </template>

            <template v-slot:content>
                
                <div class="grid">
                
                    <div class="field-checkbox col">

                        <Checkbox inputId="binary" v-model="checked" :binary="true" />

                        <label for="binary">{{
                                (checked)? 'Posee Licencia de Conducir' : 'No posee Licencia de Conducir'
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
                        :class="chkVencida ? 'bg-green-500 border-green-500 text-white': 'bg-red-500 border-red-500 text-white'"
                        aria-label="do you confirm" />

                    </div>
                </div>
                
                <label for="">Ingrese una descripcion:</label>
                <div class="grid">
                    <div class="field col">
                    
                        <Textarea v-model="txtInput" rows="3" cols="40" />
                    </div>
                    <div class="col" v-if="!chkVencida">
                        <label for="fechaVencimiento">Se venció en :</label><br>
                        <Calendar 
                            class="mt-3"
                            :class="{'p-invalid':error && submitted}" 
                            inputId="basic" v-model="fecha" autocomplete="off"
                            dateFormat="mm-dd-yy" :showIcon="true"
                            @blur="error=false"
                            />
                        <br>
                        <small v-show="" class="text-red-300">Este dato es requerido.</small>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Volver" @click="prevPage()" icon="pi pi-angle-left" />
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
            checked:false,
            chkVencida:true,
            fecha:'',
            error: false,
            txtInput:''
        }
    },
    methods: {
        nextPage() {
            this.submitted = true;
           
            if (this.fecha.length<1 && !this.chkVencida) {
                // this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 0});
                console.log('entro',this.fecha)
                this.error= true
                return
            }
            this.$router.push({ name: 'rto' })
        },
        prevPage() {
            this.$router.push({ name: 'cedulaVerde' })
        },
       
    }
}
</script>
<style>
.miCard{
    width: 50em;
}
</style>