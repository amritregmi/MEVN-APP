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
        reminder: false,

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
        },
        toggleReminder(state, updatedData) {
            // Update in the UI 
            state.items = state.items.map((item)=> item._id === updatedData._id ? {...item, reminder:updatedData.reminder}:item)
        },
        deleteItem(state, deleteItem) {
            // update the UI 
            state.items = state.items.filter((item)=> item._id !==deleteItem._id)
        }

    },
    actions: {
        // Toggles Button (changes the text of button)
        toggleButton({ commit }) {
            commit('toggleButton')
        },
        // toggles add item form 
        toggleAddItem({ commit }) {
            commit('toggleAddItem')
        },

        // all async calls are done here - COUNTER APP
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

        // FETCHING ITEMS FROM API - BACKEND - ITEMS DB
        async fetchItems({ commit }) {
            console.log('Fetch Data from API - Action Called');
            //API request
            const res = await fetch('api/items') // api => http://localhost:5000
            // Response - list of all items
            const data = await res.json()
            commit('addItemsToState',data.items)
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
            commit('addItem',data.item)
        },
        /**
         * Update reminder to backend
         */
        async toggleReminder({ commit },item){
            
            // Get the item of the given id 
            const updatedItem = {...item, reminder: !item.reminder}
            
            // Update the item's reminder in the backend 
            const res = await fetch(`api/items/${updatedItem._id}`,{
                method: 'PATCH',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            })

            // Gets the updated response 
            const data = await res.json()

            // Change in the UI - COMMIT
            commit('toggleReminder',data.item)
        },
        /**
         * Delete Item from backend
         */
        async deleteItem({ commit }, item) {
            
            if (confirm('Sure!')) {
                //send delete request to server
                const res = await fetch(`api/items/${item._id}`,{method:'DELETE'})
                // 200:OK 
                if (res.status === 200) {
                    // commit for deletion
                    commit('deleteItem',item)
                }else{
                    alert('ERROR, while deleting')
                }
                
            }
        },

        // TWO WAY BINDING ACTIONS - (FORMS) 
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
