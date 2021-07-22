export default {

    //开启名称空间
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if (context.state.count % 2) {
                context.commit("INCREMENT", value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit("INCREMENT", value)
            }, 500)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.count += value
        },
        DECREMENT(state, value) {
            state.count -= value
        }
    },
    state: {
        count: 0,
    },
    getters: {
        multiplyTen(state) {
            return state.count * 10
        }
    }
}
