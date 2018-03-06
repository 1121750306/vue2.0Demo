// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //前段路由
import VueResourse from 'vue-resource'  //ajax请求
import store from './store'   //页面的数据管理中心  此处为文件夹，默认找寻index.js
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap的css

//SPA ：Single Page Application 单页面应用 , 多实用cli脚手架

Vue.config.productionTip = false

Vue.use(VueResourse)
//单页应用的路由定义  一个路由相当于一个location ， 相对于一个或多个component
/*const routes = [{
 path:'/',//路由路径
 component:Home
 },{
 path:'/home',
 component:Home
 }]

 const router = new VueRouter({
 routes
 })*/    //此处代码在router的index.js中
/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    router,
    store,   //组件插入数据流的功能
    // template: '<App/>',
    // components: { App }
    render: h => h(App)
})
