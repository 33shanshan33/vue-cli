// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import "./assets/scss/common.scss";
// 引入路由模块
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from 'jquery'
import axios from 'axios';
import qs from 'qs';
// Vue.prototype.$http = axios;

//使用路由模块 
Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    axios,
    template: '<App/>',
    components: { App }
})