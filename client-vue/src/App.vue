<template>
  <div class="container">

    <Header 
      @toogle-add-item="toggleAddItem" 
      title="ShoppingCart - Vue JS" 
      :showAddItem="showAddItem"
    />
    
    <router-view :showAddItem="showAddItem"></router-view>
    
    <Footer/>
  </div>
</template>


<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data(){
    return{
      showAddItem: true,
    }
  },
  methods:{
    /**
     * Toggles the button
     * @SHOWS EITHER INPUT FORM (CLOSE)
     * @OR HIDES INPUT FORM (ADD Item)
     */
    toggleAddItem(){
      this.showAddItem = !this.showAddItem
    },
  },
  
  
}
</script>

