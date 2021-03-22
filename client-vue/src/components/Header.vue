<template>
    <header class="header">
        <h1>{{title}}</h1>

        <Button 
            @button-clicked="toggleAddTask" 
            :text="showAddItem ? 'Close' : 'Add Item' " 
            :color="showAddItem ? 'red': 'green' "
        />

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
        toggleAddTask(){
            
            this.$emit('toogle-add-item')
        }
    },
    components:{
        Button,
    }
}
</script>