import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)


import app from './App.vue'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'

import { Header,Swipe, SwipeItem,Button } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)


import router from './router.js'

Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
/*  return moment(dataStr).format(pattern)*/

})

var vm = new Vue({
   el:'#app',
   render:
   function(e){
   	return e(app)
   },
   router

})