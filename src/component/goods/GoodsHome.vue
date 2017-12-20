<template>
    <div>
        <!-- 商品内容首页：因为代码太多，一份为3 -->
        <app-Breadcrumb></app-Breadcrumb>
        <app-Top></app-Top>
        <app-List></app-List>
        
    </div>
</template>

<script>
// 引入首页拆分后的组件
import BreadcrumbComponent from './frames/Breadcrumb.vue';
import ListComponent from './frames/List.vue';
import TopComponent from './frames/Top.vue';

    export default {
        // 配置组件
        components:{
            appBreadcrumb:BreadcrumbComponent,
            appList:ListComponent,
            appTop:TopComponent,

        }
    }
</script>

<style scoped>

</style>