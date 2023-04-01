import { createApp } from 'vue'
import './style.less'
import router from './router/index.js'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import {
  Tabbar,
  TabbarItem,
  NoticeBar,
  Divider,
  Tag,
  Button,
  Grid,
  GridItem,
  Field,
  NumberKeyboard,
  Icon,
  Toast
} from 'vant'
import 'vant/lib/index.css'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app
  .use(router)
  .use(pinia)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NoticeBar)
  .use(Divider)
  .use(Tag)
  .use(Button)
  .use(Grid)
  .use(GridItem)
  .use(Field)
  .use(NumberKeyboard)
  .use(Icon)
  .use(Toast)
  .mount('#app')
