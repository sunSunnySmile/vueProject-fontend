<template>
    <div>
        <div class="section" v-for="item in dataList" :key="item.level1cateid">

            <!--子类-->
            <div class="main-tit" >
                <h2>{{item.catetitle}}</h2>
                <p>
                    <!-- <a href="/goods/43.html" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</a> -->
                    <router-link :to="{name:'gd',params:{id:subitem.subcateid}}" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</router-link>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>                      
                </p>
                
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">

                        <li v-for="data in item.datas" :key="data.artID">
                            <a href="/goods/show-91.html">
                                <div class="img-box">
                                    <img :src="data.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{data.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{data.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{data.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{data.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dataList:[]
          
        }
    },
    methods:{
        getDataList(){
            this.$http.get(this.$api.goodsContent)
            .then(rsp=>{
                // console.log(rsp.data.message);
                this.dataList=rsp.data.message;                
            });
        }
    },
    created(){
        this.getDataList();
    }




};
</script>

<style scoped>

</style>