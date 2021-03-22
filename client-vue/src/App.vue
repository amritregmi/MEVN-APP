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
    deleteItem(id){
      if(confirm('Sure!')){
        this.items = this.items.filter((item)=> item.id !==id)
      }
    },
    toggleReminder(id){
      this.items = this.items.map((item)=> item.id === id ? {...item, reminder:!item.reminder}:item)
    },
    addItem(newItem){
      this.items = [...this.items,newItem]
    },
    toggleAddItem(){
      
      this.showAddItem = !this.showAddItem
    },
  },
  created(){
    this.items = [
      {
        id: 1,
        text: 'Drinks',
        description: 'Solo, Coke, VB',
        reminder: true,
      },
      {
        id: 2,
        text: 'Chips',
        description: 'Smiths Cheese and Onion',
        reminder: false,
      },

    ]
  },
  
}
</script>

<style lang="scss">
  @import '../assets/sass/main.scss'
</style>
