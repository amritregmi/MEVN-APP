<template>
    <div class="counter">
        <h1>Random Number Adder</h1>
        <h2>{{$store.state.counter}}</h2>
        <div class="buttons">
            <button @click="$store.dispatch('increaseCounter')">+</button>
            <button @click="$store.dispatch('decreaseCounter')">-</button>
        </div>
      </div>
</template>

<script>
    
    export default {
        name:'Counter',
        created(){
            this.$store.commit('increaseCounter',1000)
        }
    }
</script>

<style scoped>
    .counter{
        background-color: #efefef;
        border-radius: 2rem;
        padding: .2rem;
        
    }
    h1{
        font-size: 4rem;
        color: blue;
        text-align: center;
    }
    h2{
        font-size: 8rem;
    }
    .buttons{
        text-align: center;
        margin-bottom: 8rem;
    }
    button{
        margin: 0 2rem;
        font-size: 4rem;
        width: 10rem;
    }
    
</style>
