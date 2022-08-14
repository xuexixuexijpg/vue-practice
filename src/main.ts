import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'
import * as Icons from '@element-plus/icons'
import 'lib-flexible'
import './utils/rem'

const app = createApp(App)
app.use(store)
setupStore()
//先注册再匹配 否则都是path匹配到notFound
app.use(router)
app.mount('#app')

// 注册全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

console.log(process.env.VUE_APP_BASE_URL)
