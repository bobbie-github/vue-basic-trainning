import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import {createPinia} from "pinia";



const pinia = createPinia()
let app = createApp(App)
// use router
app.use(router)
app.use(pinia)
app.mount('#app')
