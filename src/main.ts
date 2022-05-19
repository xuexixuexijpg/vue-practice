import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons'

const app = createApp(App)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')

// 注册全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

console.log(process.env.VUE_APP_BASE_URL)
