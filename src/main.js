import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
