import { createApp } from 'vue'
import './style.less'
import router from './router/index.js'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import { Tabbar, TabbarItem, NoticeBar, Divider, Tag, Button } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router).use(Tabbar).use(TabbarItem).use(NoticeBar).use(Divider).use(Tag).use(Button).mount('#app')
