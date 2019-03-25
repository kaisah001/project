<template>
	<ul class="mui-table-view" >
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.soureid">
					<router-link :to="'/home/newsinfo/'+item.soureid">
						<img class="mui-media-object mui-pull-left" :src="item.header">
						<div class="mui-media-body">
							<h1>{{item.text}}</h1>
							<p class='mui-ellipsis'>
								<span>发表时间：{{item.passtime}}</span>
                                <span>点击：{{item.down}}</span>
							</p>
						</div>
					</router-link>
				</li>
				

			</ul>

</template>

<script>
import { Toast } from 'mint-ui'
export default{
 data(){
    return{
      newslist:[]

    };
},
created(){
		this.getNewslist();
		console.log(this.$route.query.id)
},
 methods:{
       getNewslist(){

       	this.$http.get('https://www.apiopen.top/satinGodApi?type=5&page=1').then(result=>{
       		if(result.body.code===200){
             this.newslist =  result.body.data
             console.log(result.body.data)
       		}else{
              Toast('获取失败!')
       		}
       	});
       }
	}
	
};

</script>

<style lang="scss" scoped>
.mui-table-view{
    li{h1{
 	font-size:12px
  }
}


 
 .mui-ellipsis{
 	font-size:12px;
 	color:#226aff;
 	display:flex;
 	justify-content:space-between;
 }    

}


</style>