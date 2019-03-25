<template>
	<div class="newsinfo-container">
		<h3 class="title">新闻资讯--{{id}}</h3>
		<p class="subtitle">
			<span>发表时间：{{}}</span>
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
      newsinfo:{},
      id:this.$route.params.id
    };
  
},
created(){
  this.getNewsinfo()
},

methods:{
    getNewsinfo(){
    this.$http.get('https://www.apiopen.top/satinGodApi?type=5&page=1').then(result=>{
            var result = result.body.data
           var b = result.findIndex((e)=>(e.soureid==this.id))
            console.log(b)








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