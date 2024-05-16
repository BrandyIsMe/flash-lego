import { createApp } from 'vue'
import './assets/css/reset.css'
import Antd from 'ant-design-vue'
import 'flashp-lego/dist/bundle.css'
import 'ant-design-vue/dist/reset.css'
import router from '@/router'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
