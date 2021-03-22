<template>
  <div class="container">

    <Header 
      @toogle-add-item="toggleAddItem" 
      title="ShoppingCart - Vue JS" 
      :showAddItem="showAddItem"
    />

    <div v-show="showAddItem">
      <AddTask  @add-item="addItem"/>
    </div>

    <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks" />
    <Footer/>
  </div>
</template>


<script>
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    AddTask,
    Tasks,
    Footer
  },
  data(){
    return{
      tasks:[],
      showAddItem: true,
    }
  },
  methods:{
    deleteTask(id){
      if(confirm('Sure!')){
        this.tasks = this.tasks.filter((task)=> task.id !==id)
      }
    },
    toggleReminder(id){
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder:!task.reminder}:task)
    },
    addItem(newItem){
      this.tasks = [...this.tasks,newItem]
    },
    toggleAddItem(){
      
      this.showAddItem = !this.showAddItem
    },
  },
  created(){
    this.tasks = [
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
