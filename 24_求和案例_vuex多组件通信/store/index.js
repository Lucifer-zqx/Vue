import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * 创建store对象：三个关键属性：state(状态)，action(生成动作的方法),mutations(操作状态的方法)
 */

//动作
const actions = {
    incrementOdd(context, value) {
        // console.log(context,value)
        //context是一个mini版的store对象，
        // 可以把处理的结果提交给mutations，也可以继续分发给其他action进行数据在加工
        if (context.state.count % 2) {
            context.commit("INCREMENT", value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit("INCREMENT", value)
        }, 500)
    }
}

//处理工厂
const mutations = {
    INCREMENT(state, value) {
        //state为当前状态，value为传递进来的值
        state.count += value
    },
    DECREMENT(state, value) {
        //state为当前状态，value为传递进来的值
        state.count -= value
    },
    ADDPERSON(state,value){
        state.persons.unshift(value)
    }
}

//状态
const state = {
    //最起码管理一个状态
    count: 0,
    persons:[]
}

//getter
const getters = {
    //getters中可以直接拿到state的全部状态
    multiplyTen(state) {
        return state.count * 10
    }
}

//通过Vuex.Store生成store实例对象
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})