import { createStore } from 'vuex';
import axios from 'axios'

export default createStore({
    state: {
        title:'ShoppingCart - Vue JS',
        counter: 0,
        items: [],
        toggleButton:true,
        toggleAddItem: true,
        text: '',
        description: '',
        reminder: true,

    },
    mutations: {
        toggleButton(state) {
            state.toggleButton = !state.toggleButton
        },
        toggleAddItem(state) {
            state.toggleAddItem = !state.toggleAddItem
        },
        increaseCounter(state,randomNumber) {
            state.counter+=randomNumber
        },
        decreaseCounter(state,randomNumber) {
            state.counter-=randomNumber
        },
        addItemsToState(state, items) {
            state.items = items
        },
        // TWO WAY BINDING MUTATIONS 
        setText(state, newValue) {
            state.text = newValue
        },
        setDescription(state, newValue) {
            state.description = newValue
        },
        setReminder(state, newValue) {
            state.reminder = newValue
        },
        addItem(state, newItem) {
            state.items = [...state.items, newItem]
        }

    },
    actions: {
        /**
         * Toggles the button
         * @SHOWS EITHER INPUT FORM (CLOSE)
         * @OR HIDES INPUT FORM (ADD Item)
         */
        toggleButton({ commit }) {
            commit('toggleButton')
        },
        // toggles add item form 
        toggleAddItem({ commit }) {
            commit('toggleAddItem')
        },
        // all async calls are done here 
        async increaseCounter({ commit }) {
            // get random number 
            const response = await axios('https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new')
            commit('increaseCounter',response.data)
        },

        async decreaseCounter({commit}) {
            // get random number 
            const response = await axios('https://www.random.org/integers/?num=1&min=1&max=10&col=5&base=10&format=plain&rnd=new')
            commit('decreaseCounter', response.data)
        },
        // FETCHING ITEMS FROM API - BACKEND
        async fetchItems({ commit }) {
            console.log('Fetch Data from API - Action Called');
            //API request
            const res = await fetch('api/items') // api => http://localhost:5000
            // Response - list of all items
            const data = await res.json()
            commit('addItemsToState',data)
        },
        async addItem({ commit },newItem) {
            // make api request
            const res = await fetch('api/items',{
                method: 'POST',
                headers:{
                'Content-type':'application/json',
                },
                body: JSON.stringify(newItem)
            })
            // Gets the new Item
            const data = await res.json()
            commit('addItem',data)
        },

        // TWO WAY BINDING ACTIONS FOR FORMS 
        setText({ commit },newValue) {
            commit('setText',newValue)
        },
        setDescription({ commit },newValue) {
            commit('setDescription',newValue)
        },
        setReminder({ commit }, newValue) {
            commit('setReminder',newValue)
        }


    },
    getters: {
        getAppTitle(state) {
            return state.title
        },
        getShowItemBooleanValue(state) {
            return state.getShowItemBooleanValue
        }
    },
    modules: {
    },
});
