<template>
    <div v-for="item in items" :key="item.id">
        <Item 
            @delete-item="$emit('delete-item',item.id)" 
            @toggle-reminder="$emit('toggle-reminder',item.id)"
            :item=item 
        />
    </div>
    
</template>


<script>
import Item from './Item'
export default {
    name:'Items',
    components:{
        Item
    },
    props:{
        items:Array,
    },
    emits:['delete-item','toggle-reminder']
}
</script>