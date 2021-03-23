import { createStore } from 'vuex'

export default createStore({
    state: {
        counter:0
    },
    mutations: {
        decreaseCounter(state) {
            state.counter--
        },
        increaseCounter(state) {
            state.counter++
        }
    },
    actions: {
        
    },
    getters: {
        
    }
})