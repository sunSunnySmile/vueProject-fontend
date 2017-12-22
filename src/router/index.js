// 路由：专门用于设置路由,所有服务器的请求都将经过这里，根据不同的路径加载不同的组件，如果某个路由的子路由过多，可以将路由拆分，最后再引入就好


//引入路由模块 
import VueRouter from 'vue-router';

// 引入模块组件
import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';
import GoodsDetailComponent from '../component/goods/detail/GoosDetail.vue';

// 配置路由
const routerConfig = [
    // 改变首页的路径指向
    { path: '/', redirect: '/goods' },


    { name: 'g', path: '/goods', component: GoodsHomeComponent },
    { name: 'gm', path: '/goods/more', component: GoodsMoreComponent },
    { name: 'gd', path: '/goods/detail/:id', component: GoodsDetailComponent }
];
export default new VueRouter({
    routes: routerConfig
});