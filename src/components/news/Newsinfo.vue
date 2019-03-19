<template>
	<div class="newsinfo-container">
		<h3 class="title">新闻资讯</h3>
		<p class="subtitle">
			<span>发表时间：</span>
			<span>点击：</span>
		</p>
		<hr>
		<div class="content"></div>
	</div>
</template>

<script>
	
export default{
 data(){
    return{
      newsinfo:{}
    };
},
methods:{
	getNewsinfo(){
		this.$http.get('api/getnew/'+this.id).then(result=>{
			if(result.body.status === 0){
              this.newsinfo = result.body.message[0];
			}else{
				Toast('获取新闻失败！')
			}
		})
	}
}

};
</script>

<style lang="scss">
	.newsinfo-container{
      padding:0 4px;
    .title{
    	font-size:16px;
    	text-align:center;
    	margin:15px 0;
    	color:red;
    }
    .subtitle{
    	font-size:13px;
    	color:#226aff;
    	display:flex;
    	justify-content:space-between;
    }
    .content{
       img{
       	width:100%;
       }
    }




	}

</style>