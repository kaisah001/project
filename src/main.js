import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import app from './App.vue'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'

import { Header } from 'mint-ui'

import router from './router.js'

Vue.component(Header.name, Header)

var vm = new Vue({
   el:'#app',
   render:
   function(e){
   	return e(app)
   },
   router

})