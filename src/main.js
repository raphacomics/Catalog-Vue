import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiPencil, HiTrash } from "oh-vue-icons/icons";

addIcons(HiPencil, HiTrash);


const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
