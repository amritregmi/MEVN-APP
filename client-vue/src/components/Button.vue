<template>

    <button @click="onClick" :class="`btn btn--${color}`" type="button">
        {{text}} 
    </button>
</template>

<script>
export default {
    name:'Button',
    props:{
        text:String,
        color:String,
        
    },
    methods:{
        onClick(){
            this.$emit('button-clicked')
        }
    }
}
</script>