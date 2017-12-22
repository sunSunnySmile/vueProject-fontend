// main.js是在webpack_config里面配置的文件打包入口， 

// 导入第三方包
import Vue from 'vue';
import './css/style.css';
import filters from './filter';
// 导入路由模块
import VueRouter from 'vue-router';
// 导入elementUi的样式
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';




// 1-1将api_config和axios写入到Vue的原型上
import axios from './js/axios_config.js';
import api from './js/api_config.js';

// 1-2写入到Vue的原型上
Vue.prototype.$http = axios;
Vue.prototype.$api = api;




// 1.2 启用vue插件
Vue.use(VueRouter);
Vue.use(elementUI);
Vue.use(filters);



// 导入路由实例
import router from './router/index.js';

import AppComponent from './component/App.vue';

new Vue({
    el: "#app",
    render: c => c(AppComponent),
    // router:router  //ES6省略语法
    router //ES6省略语法
});