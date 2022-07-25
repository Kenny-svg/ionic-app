import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/tailwind.css"
import { MotionPlugin } from '@vueuse/motion'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)

app.use(MotionPlugin)

createApp(App).component("FontAwesomeIcon", FontAwesomeIcon).use(router).mount('#app')
