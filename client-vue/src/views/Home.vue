<template>
    <div >
        <AddItem v-show="$store.state.toggleAddItem"/>
        <Items @delete-item="deleteItem" @toggle-reminder="toggleReminder"/>
    </div>
</template>

<script>
    import AddItem from '../components/AddItem'
    import Items from '../components/Items'

    export default{
        name: 'Home',
        components:{
            AddItem,
            Items
        }, 
        methods:{
            /**
             * Delete Item from backend
             */
            async deleteItem(id){
            if(confirm('Sure!')){
                const res = await fetch(`api/items/${id}`,{
                method:'DELETE'
                })
                // 200:OK 
                if(res.status===200){
                this.items = this.items.filter((item)=> item.id !==id)
                }else{
                alert('ERROR, while deleting')
                }
                
            }
            },
            /**
             * Update reminder to backend
             */
            async toggleReminder(id){

            // Get the item of the given id 
            const itemTotoggle = await this.fetchItem(id)
            const updtateItem = {...itemTotoggle, reminder: !itemTotoggle.reminder}

            // Update the item's reminder in the backend 
            const res = await fetch(`api/items/${id}`,{
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updtateItem)
            })
            // Gets the updated response 
            const data = await res.json()

            // Change in the UI 
            this.items = this.items.map((item)=> item.id === id ? {...item, reminder:data.reminder}:item)
            },
            
            /**
             * @Gets all Item list from backend api 
             */
            async fetchItems(){

            //API request
            const res = await fetch('api/items') // api => http://localhost:5000
            // Response - list of all items
            const data = await res.json()

            return data
            },
            /**
             * @Gets single Item 
             */
            async fetchItem(id){
            const res = await fetch(`api/items/${id}`)
            const data = res.json()
            return data
            }
        },
        /**
         * @LIFECYCLE METHOD
         * @RUNS everytime the app is created or state is changed
         */
        async created(){
            this.$store.dispatch('fetchItems')
        },
    }
</script>

<style scoped>
    .counter{
        background-color: #efefef;
        border-radius: 2rem;
        padding: .2rem;
        margin-bottom: 3rem;
    }
    h2{
        font-size: 8rem;
    }
    .buttons{
        text-align: center;
        margin-bottom: 8rem;
    }
    button{
        margin-right: 2rem;
        font-size: 4rem;
    }
    
</style>