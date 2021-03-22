<template>
  <div class="container">

    <Header 
      @toogle-add-item="toggleAddItem" 
      title="ShoppingCart - Vue JS" 
      :showAddItem="showAddItem"
    />

    <div v-show="showAddItem">
      <AddItem  @add-item="addItem"/>
    </div>

    <Items @delete-item="deleteItem" @toggle-reminder="toggleReminder" :items="items" />
    <Footer/>
  </div>
</template>


<script>

import Header from './components/Header'
import AddItem from './components/AddItem'
import Items from './components/Items'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    AddItem,
    Items,
    Footer
  },
  data(){
    return{
      items:[],
      showAddItem: true,
    }
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
     * Add Item to backend
     */
    async addItem(newItem){
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

      // Update the Item in the UI 
      this.items = [...this.items,data]
    },
    /**
     * Toggles the button
     * @SHOWS EITHER INPUT FORM (CLOSE)
     * @OR HIDES INPUT FORM (ADD Item)
     */
    toggleAddItem(){
      this.showAddItem = !this.showAddItem
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
    this.items = await this.fetchItems()
  },
  
}
</script>

<style lang="scss">
  @import '../assets/sass/main.scss'
</style>
