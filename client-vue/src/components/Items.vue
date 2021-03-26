<template>
    <div v-for="item in $store.state.items" :key="item.id">
        <Item :item=item />
    </div>
    
</template>


<script>
import Item from './Item'
export default {
    name:'Items',
    components:{
        Item
    },
}
</script>