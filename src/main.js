import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { Ion } from 'cesium'
Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzYmRhZjhhYS0zNTRhLTQwMDctYmJjMC1kNjM1MmZmZTdiYTUiLCJpZCI6MTU2MjA4LCJpYXQiOjE2OTAyNTU3ODR9.Qt3BrwiUL55jI3jpYddENY9WN8l_jbyN6cFvvLDidA0"

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
