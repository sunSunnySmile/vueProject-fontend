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

                                <li v-for="item in Topdata.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                       <p>
                                            <span v-for="subitem in item.subcates" :key="subitem.id">
                                                {{subitem.title}}
                                            </span>
                                       </p>
                                    </h3>  
                                  <div class="item-box">
                                        <!-- 如有三级分类，此处可循环 -->
                                        <dl>
                                            <dt>
                                                <router-link :to="{name:'gd',params:{id:item.id}}">
                                                    {{item.title}}
                                                </router-link>
                                            </dt>
                                            <dd>
                                               <router-link :to="{name:'gd',params:{id:item.id}}"  v-for="subitem in item.subcates" :key="subitem.id">
                                                     {{subitem.title}}
                                                </router-link>

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

                            <li v-for="(item,i) in Topdata.toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{i+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <router-link :to="{name:'gd',params:{id:item.id}}">{{item.title}}</router-link>
                                    <span>{{item.add_time|date}}</span>
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
                    console.log(rsp.data.message);
                    this.Topdata=rsp.data.message
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