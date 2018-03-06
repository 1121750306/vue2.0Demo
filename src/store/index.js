/**
 * Created by wanganyu on 2017/10/10.
 */
//数据中心
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './actions'
//vuex是vue的第三方插件   用来操作数据流  统一管理    数据改变的动作，数据的通信   单一职责的开发模式
//将vuex的逻辑全部放到index.js  ，在main.js里没有任何vuex的代码
Vue.use(Vuex);

//状态集合，全局管理的引起界面状态改变的值
const state = {
    totalTime: 0,
    list: [],
}

export default new Vuex.Store({
    state,  //状态机制,状态树
    mutations,  //改变
    actions  //何种动作触发改变     组件不能直接改变state
})
