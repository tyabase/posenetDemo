
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'
import '../node_modules/fullpage.js/dist/fullpage.min.css'
import VueScrollTo from 'vue-scrollto'
import * as Icons from '@ant-design/icons-vue'

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

tf.setBackend('webgl');


let scrollOptions = {
    container: "body", //滚动的容器
    duration: 500, //滚动时间
    easing: "ease", //缓动类型
    offset: -50, // 滚动时应应用的偏移量。此选项接受回调函数
    force: true, // 是否应执行滚动
    cancelable: true, // 用户是否可以取消滚动
    onStart: false, // 滚动开始时的钩子函数
    onDone: false, // 滚动结束时候的钩子函数
    onCancel: false, // 用户取消滚动的钩子函数
    x: false, // 是否要在x轴上也滚动
    y: true    // 是否要在y轴上滚动
}

const app = createApp(App)
const icons = Icons
for ( const i in icons){
    app.component(i,icons[i])
}

app.use(router)
app.mount('#app')
app.use(Antd)
app.use(VueFullPage)
app.use(VueScrollTo,scrollOptions)