/**
 * Created by wanganyu on 2017/10/10.
 */
import * as types from './mutation-types'

export default{
    //各种改变
    [types.ADD_TOTAL_TIME](state, time){
        state.totalTime = state.totalTime + time;
    },
    [types.DEC_TOTAL_TIME](state, time){
        state.totalTime = state.totalTime - time;
    },
    [types.SAVE_PLAN](state, plan){
        state.list.push(plan);
    },
    [types.DELETE_PLAN](state, index){
        state.list.splice(index, 1);
    }
}
