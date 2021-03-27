<template>
    <div :class="['item', item.reminder ? 'item--shake' : '']">
        <h3>
            <span>{{item.text}}</span>
            <i class="fas fa-bell" @click="callActionForReminder(item._id)"></i>
            <i class="fas fa-times" @click="callActionToDelete(item._id)"></i>
        </h3>
        <p>{{item.description}}</p>
    </div>
</template>


<script>
export default {
    name:'Item',
    props:{
        item:Object
    },
    methods:{
        // get single item by id 
        async fetchItem(id){
            const res = await fetch(`api/items/${id}`)
            
            const data = await res.json()
            return data.item
        },
        // calls action to change reminder data
        async callActionForReminder(id){
            
            const item = await this.fetchItem(id)
            //dispatch the action
            this.$store.dispatch('toggleReminder',item)
        },
         // calls action to change reminder data
        async callActionToDelete(id){
            const item = await this.fetchItem(id)
            
            //dispatch the action
            this.$store.dispatch('deleteItem',item)
        },

    }
}
</script>
