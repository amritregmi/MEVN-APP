<template>
    <header class="header">

        <h1>{{$store.getters.getAppTitle}}</h1>

        <!-- HOME PAGE SHOW THIS BUTTON -->
        <Button 
            v-show="homePage"
            @button-clicked="$store.dispatch('toggleAddItem')" 
            :text="$store.state.toggleAddItem ? 'Close' : 'Add Item' " 
            :color="$store.state.toggleAddItem ? 'red': 'green' "
        />

        <!-- OTHE PAGE SHOW THIS BUTTON -->
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