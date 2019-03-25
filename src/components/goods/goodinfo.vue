<template>
    <div class="card_container">
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
     </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header mui-card-media" >商品的名称标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                    市场价：<del>¥2399</del>&nbsp;&nbsp; 销售价：<span class="now_price">¥2399</span></p>
                    <p>购买数量：<numbox @func="getcount"></numbox></p>
                    <p>
                      <mt-button type="primary" size="small">立即购买</mt-button>
                      
                      <mt-button type="danger" size="small" @click="ballshow">加入购物车</mt-button>


                    </p>

                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
        </div>
    </div>
</template>
<script>
import numbox from '../subcomponents/goodsinfo_numberbox.vue'
export default {
    data() {
        return {
          ballFlag:false,
          usercount:1

        };
    },
    methods: {
        getGoodslist() {
            this.$http.get('/').then(result => {
                // this.goodslist = result.body.data;
            })
        },
        ballshow(){
          this.ballFlag=!this.ballFlag;

        },
        beforeEnter(el){
         el.style.transform="translate(0,0)";
        },
        enter(el,done){
          el.offsetWidth;
          var ballposition=this.$refs.ball.getBoundingClientRect()
          var badgeposition= document.getElementById("badge").getBoundingClientRect();
          var xDist = badgeposition.left - ballposition.left;
          var yDist = badgeposition.top - ballposition.top;

        
          el.style.transform=`translate(${xDist}px,${yDist}px)`;
          el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
          done();
        },
        afterEnter(el){
          this.ballFlag= !this.ballFlag;

        },
        getcount(count){
          this.usercount = count;
          console.log(this.usercount);
        }
    },
    components:{
         numbox

    }
 
};
</script>
<style lang="scss">
.ball{
  background-color: red;
  width:10px;
  height:10px;
  border-radius:50%;
  position:absolute;
  z-index:999;
  top:445px;
  left:151px;

}
</style>