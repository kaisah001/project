import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Goodslist from './components/goods/goodslist.vue'
import Goodsinfo from './components/goods/goodinfo.vue'


var router = new VueRouter({
    routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/shopcar',component:ShopcarContainer},
      {path:'/search',component:SearchContainer},
      {path:'/home/newslist',component:Newslist},
      {path:'/home/newsinfo/:id',component:Newsinfo},
      {path:'/home/goodlist',component:Goodslist},
      {path:'/home/goodsinfo',component:Goodsinfo}
      
      

    ],
    linkActiveClass:'mui-active'
})

export default router