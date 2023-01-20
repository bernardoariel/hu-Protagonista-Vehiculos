import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import "./assets/styles.css";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Steps from 'primevue/steps';
import Textarea from 'primevue/textarea';
import ToggleButton from 'primevue/togglebutton';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';      

const app = createApp(App);
app.use(PrimeVue)
app.use(ToastService)
app.component('InputText', InputText);
app.component('Card', Card);
app.component('Toast', Toast);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Steps', Steps);
app.component('Textarea', Textarea);
app.component('ToggleButton', ToggleButton);
app.component('Calendar', Calendar);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);


app.use(router)

app.mount('#app')
