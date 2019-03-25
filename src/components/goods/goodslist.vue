<template>
    <div class="goods-list">
        <router-link class="goods-item" to="/home/goodsinfo">
            <img src="https://2a.zol-img.com.cn/product/192_220x165/438/ce5kSqjvJTxiI.jpg" alt="">
            <h1 class="title">标题</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥2011</span>
                    <span class="old">¥2300</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <div class="goods-item">
            <img src="https://2a.zol-img.com.cn/product/192_220x165/438/ce5kSqjvJTxiI.jpg" alt="">
            <h1 class="title">标题</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥2011</span>
                    <span class="old">¥2300</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://2a.zol-img.com.cn/product/192_220x165/438/ce5kSqjvJTxiI.jpg" alt="">
            <h1 class="title">标题</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥2011</span>
                    <span class="old">¥2300</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
     goodslist:[]
    }
  },
  methods:{
    getGoodslist(){
      this.$http.get('/').then(result=>{
       // this.goodslist = result.body.data;
      })
    }
  }

};
</script>
<style lang="scss">
.goods-list {
  display:flex;
  flex-wrap:wrap;
  padding:7px;
  justify-content:space-between;

  .goods-item{
    width:49%;
    border:1px solid #ccc;
    box-shadow:0 0 8px #ccc;
    margin:4px 0;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:293px;
    img{
      width:100%;
    }

    .title{
      font-size:14px;
    }

    .info{
      background-color: #eee;
      p{
        margin:0px;
        padding:5px;


      }
      .price{
        .now{
          color:red;
          font-weight:bold;
          font-size:16px;
           }
          .old{
            text-decoration:line-through;
            font-size:12px;
            margin-left:10px;
           }
          }
          .sell{
            display:flex;
            justify-content:space-between;
            font-size:13px;
         
        }
    
    }


  }

}
</style>