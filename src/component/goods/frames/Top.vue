<template>
    <div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>手机数码</span>
                                        <p>

                                            手机通讯 摄影摄像 存储设备

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">手机数码</a>
                                            </dt>
                                            <dd>

                                                <a href="/goods/43.html">手机通讯</a>

                                                <a href="/goods/44.html">摄影摄像</a>

                                                <a href="/goods/45.html">存储设备</a>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>电脑办公</span>
                                        <p>

                                            电脑整机 外设产品 办公打印

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <a href="/goods/41.html">电脑办公</a>
                                            </dt>
                                            <dd>

                                                <a href="/goods/46.html">电脑整机</a>

                                                <a href="/goods/47.html">外设产品</a>

                                                <a href="/goods/48.html">办公打印</a>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>影音娱乐</span>
                                        <p>

                                            平板电视 音响DVD 影音配件

                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <a href="/goods/42.html">影音娱乐</a>
                                            </dt>
                                            <dd>

                                                <a href="/goods/49.html">平板电视</a>

                                                <a href="/goods/50.html">音响DVD</a>

                                                <a href="/goods/51.html">影音配件</a>

                                            </dd>
                                        </dl>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->

                    <!--幻灯片:替换轮播图中的数据，记得导入element-ui的样式-->
                    <div class="left-705">
                        <div class="banner-img">
                            <el-carousel :interval="5000" arrow="always">
                                <el-carousel-item v-for="item in Topdata.sliderlist" :key="item.id">
                                    <img :src="item.img_url">
                                </el-carousel-item>
                            </el-carousel>

                        </div>
                    </div>
                    <!--/幻灯片-->

                    <!--推荐商品-->
                    <div class="left-220">
                        <ul class="side-img-list">

                            <li>
                                <div class="img-box">
                                    <label>1</label>
                                    <img src="/upload/201504/20/thumb_201504200314272543.jpg">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">奔腾（BNTN） 380功放+纽约至尊 套装家庭影院</a>
                                    <span>2015-04-20</span>
                                </div>
                            </li>

                            <li>
                                <div class="img-box">
                                    <label>2</label>
                                    <img src="/upload/201504/20/thumb_201504200258403759.jpg">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-97.html">三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清</a>
                                    <span>2015-04-20</span>
                                </div>
                            </li>

                            <li>
                                <div class="img-box">
                                    <label>3</label>
                                    <img src="/upload/201504/20/thumb_201504200242250674.jpg">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-95.html">惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）</a>
                                    <span>2015-04-20</span>
                                </div>
                            </li>

                            <li>
                                <div class="img-box">
                                    <label>4</label>
                                    <img src="/upload/201504/20/thumb_201504200239192345.jpg">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-94.html">金士顿（Kingston） DataTraveler SE9 32GB 金属U盘</a>
                                    <span>2015-04-20</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <!--/推荐商品-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {        
        data(){
            return {
                    Topdata:{
                        catelist:[],
                        sliderlist:[],
                        toplist:[]
                    }                    
                
            }
        },
        methods:{
            getTopdata(){                
                this.$http.get(this.$api.goodsTop)
                .then(rsp=>{
                    // console.log(rsp.data.message);
                    this.Topdata=rsp.data.message
                    console.log(this.Topdata.catelist);
                    
                })
            },                    
        },
       created(){
            this.getTopdata();
            }

        
    };
</script>

<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>