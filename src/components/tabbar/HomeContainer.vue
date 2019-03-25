<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.header">
                <img :src="item.header" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>

            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodlist">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div>
                </a></li>
        </ul>
        <h3>homecontainer</h3>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            lunbotuList: []
        };
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            this.$http.get('https://www.apiopen.top/satinGodApi?type=5&page=1').then(result => {



                if (result.body.code === 200) {
                    this.lunbotuList = result.body.data;
                    Toast('获取加载轮播图成功！')
                } else {
                    Toast('获取加载轮播图失败！')
                }


            });
        }
    }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;


}

.mint-swipe-item {
    &:nth-child(1) {
        background-color: yellow
    }

    &:nth-child(2) {
        background-color: red
    }

    &:nth-child(3) {
        background-color: green
    }

    img {
        height: 100%;
        width: 100%;
    }

}

.mui-table-view {
    background-color: #fff;

}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
}
</style>