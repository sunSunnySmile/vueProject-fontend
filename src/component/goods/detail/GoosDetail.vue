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
                                <div class="comment-box">
                                    <!--取得评论总数-->
                                    <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </form>
                                    <ul id="commentList" class="list-box">
                                        <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:58:59</span>
                                                </div>
                                                <p>testtesttest</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <!--放置页码-->
                                    <div class="page-box" style="margin:5px 0 0 62px">
                                        <div id="pagination" class="digg">
                                            <span class="disabled">« 上一页</span>
                                            <span class="current">1</span>
                                            <span class="disabled">下一页 »</span>
                                        </div>
                                    </div>
                                    <!--/放置页码-->
                                </div>

                                <!--/网友评论-->
                            </div>

                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">

                                    <li>
                                        <div class="img-box">
                                            <a href="/goods/show-98.html">
                                                <img src="/upload/201504/20/thumb_201504200314272543.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="img-box">
                                            <a href="/goods/show-97.html">
                                                <img src="/upload/201504/20/thumb_201504200258403759.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="/goods/show-97.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="img-box">
                                            <a href="/goods/show-95.html">
                                                <img src="/upload/201504/20/thumb_201504200242250674.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="/goods/show-95.html">惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="img-box">
                                            <a href="/goods/show-94.html">
                                                <img src="/upload/201504/20/thumb_201504200239192345.jpg">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="/goods/show-94.html">金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</a>
                                            <span>2015-04-20</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
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