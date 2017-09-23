import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 引入组件页面
import login from '@/pages/login'
import ONE from '@/pages/one'
import TWO from '@/pages/two'
import THREE from '@/pages/three'
import personCenter from '@/pages/personCenter'
import personMoney from '@/pages/personMoney'
import myMoney from '@/pages/myMoney'
import incomeDetail from '@/pages/incomeDetail'





Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/one',
            name: 'ONE',
            component: ONE
        },
        {
            path: '/two',
            name: 'TWO',
            component: TWO
        },
        {
            path: '/three',
            name: 'THREE',
            component: THREE
        },
        {
            path: '/personCenter',
            name: 'personCenter',
            component: personCenter
        },
        {
            path: '/personMoney',
            name: 'personMoney',
            component: personMoney
        },
        {
            path: '/myMoney',
            name: 'myMoney',
            component: myMoney
        },
        {
            path: '/incomeDetail',
            name: 'incomeDetail',
            component: incomeDetail
        },


        { path: '*', redirect: '/login' }
    ]
})



// 1）webpack打包常规项目   webpackdemo
// 2）vuex
// 3)mock
// 4)mongoose