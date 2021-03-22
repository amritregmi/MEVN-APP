<template>
    <header class="header">

        <h1>{{title}}</h1>

        <Button 
            v-show="homePage"
            @button-clicked="toggleAddItem" 
            :text="showAddItem ? 'Close' : 'Add Item' " 
            :color="showAddItem ? 'red': 'green' "
        />
        <router-link to="/">
            <Button 
                v-show="otherPage"
                text="Go Back"
                color="red"
            />
        </router-link>
        
  
    </header>
</template>

<script>
import Button from './Button'
export default {
    name:'Header',
    props:{
        title:String,
        showAddItem: Boolean
    },
    methods:{
        toggleAddItem(){
            this.$emit('toogle-add-item')
        }
    },
    components:{
        Button,
    },
    computed:{
        homePage(){
            if(this.$route.path === '/'){
                return true
            }
            else{

                return false
            }
        },
        otherPage(){
            if(this.$route.path !== '/'){
                return true
            }else{
                return false
            }
        }
    }
}
</script>