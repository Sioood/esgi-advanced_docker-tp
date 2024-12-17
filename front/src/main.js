import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8181');
  next();
});
