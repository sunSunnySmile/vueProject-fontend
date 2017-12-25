<template>
    <div>
       <!-- 导航栏 -->
        <app-Bread></app-Bread>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box" >
                                <app-left-img :imglist="detailList.imglist"></app-left-img>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <app-left-info :goodsinfo="detailList.goodsinfo"></app-left-info>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a class="selected" href="javascript:;">商品介绍</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            <!--/选项卡-->

                            <!--选项内容-->
                            <div class="tab-content entry" style="display:block;">
                                内容
                            </div>

                            <div class="tab-content" style="display: block;">
                                <!--网友评论-->
                               <app-comment></app-comment>
                                <!--/网友评论-->
                            </div>

                        </div>

                    </div>
                    <!--/页面左边-->
                        <app-right :hotgoodslist="detailList.hotgoodslist"></app-right>
                    <!--页面右边-->
                   
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  //1-1 引入组件文件
    import  BreadCrumbComponent from './frame/BreadCrumb.vue';
    import LeftImgComponent from './frame/LeftImg.vue';
    import LeftInfoComponent from './frame/LeftInfo.vue';
    import RightInfoComponent from './frame/RightInfo.vue';
    import CommentComponent from '../common/comment.vue';



   


    // 1-3 以标签形式应用组件
export default {
   //1-2 设置组件名
   components:{
       appBread:BreadCrumbComponent,
       appLeftImg:LeftImgComponent,
       appLeftInfo:LeftInfoComponent,
       appRight:RightInfoComponent,
       appComment:CommentComponent
   },
    //    获取数据--由父传子
    data(){
        return {
        id:this.$route.params.id,
            detailList:{
                goodsinfo:{},
                imglist:[],
                hotgoodslist:[]
            }

        }
    },
    methods:{
        getDetailList(){
            this.$http.get(this.$api.goodsDetail+this.id)
            .then(rsp=>{
                console.log(rsp.data.message);
                this.detailList=rsp.data.message;                
            })
    },
    },
    created(){
        this.getDetailList();
    },


    
  

};
</script>

<style scoped>

</style>