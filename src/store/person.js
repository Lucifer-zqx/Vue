export default {
    namespaced: true,
    actions: {
        addPersonOfWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit("ADDPERSON", value)
            } else {
                alert("必须姓王！")
            }
        }
    },
    mutations: {
        ADDPERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: []
    },
    getters: {
        firstPerson(state) {
            let person = state.persons[0] || {}
            return person.name
        }
    }

}