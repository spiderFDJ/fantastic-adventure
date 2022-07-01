import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import directives from '@/utils/directives'
import 'ant-design-vue/dist/antd.css';
import '@/assets/index-css/reset.css'
const app = createApp(App)
app.use(store).use(router).use(Antd).use(directives).mount('#app')
