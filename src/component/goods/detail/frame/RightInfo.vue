<template>
      <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">

                                    <li v-for="item in hotgoodslist" :key="item.id">
                                        <div class="img-box">
                                            <a href="/goods/show-98.html">
                                                <img :src="item.img_url">
                                            </a>
                                        </div>
                                        <div class="txt-box">
                                            <a href="/goods/show-98.html">{{item.title}}</a>
                                            <span>{{item.add_time}}</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
</template>

<script>
    export default {
        props:['hotgoodslist'],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>