<template>
    <div >
        <AddItem v-show="$store.state.toggleAddItem"/>
        <Items />
    </div>
</template>

<script>
    import AddItem from '../components/AddItem'
    import Items from '../components/Items'

    export default{
        name: 'Home',
        components:{
            AddItem,
            Items
        }, 
        methods:{
        },
        /**
         * @LIFECYCLE METHOD
         * @RUNS everytime the app is created or state is changed
         */
        async created(){
            this.$store.dispatch('fetchItems')
        },
    }
</script>

<style scoped>
    .counter{
        background-color: #efefef;
        border-radius: 2rem;
        padding: .2rem;
        margin-bottom: 3rem;
    }
    h2{
        font-size: 8rem;
    }
    .buttons{
        text-align: center;
        margin-bottom: 8rem;
    }
    button{
        margin-right: 2rem;
        font-size: 4rem;
    }
    
</style>