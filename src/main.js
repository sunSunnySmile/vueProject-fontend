// main.js是在webpack_config里面配置的文件打包入口， 

// 导入第三方包
import Vue from 'vue';
import './css/style.css';
// 导入路由模块
import VueRouter from 'vue-router';

// 1.2 启用vue插件
Vue.use(VueRouter);


// 导入路由实例
import router from './router/index.js';

import AppComponent from './component/App.vue';

new Vue({
    el: "#app",
    render: c => c(AppComponent),
    // router:router  //ES6省略语法
    router //ES6省略语法
});