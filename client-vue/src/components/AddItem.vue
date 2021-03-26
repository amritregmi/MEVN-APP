<template>
    <form class="add-form" @submit="onAdd">
        <div class="form-control">
            <label for="task">Item Name</label>
            <input v-model="text" type="text" placeholder="Add item" name="text" id="task">
            {{$store.state.text}}
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <input v-model="description" type="text" placeholder="Desc" name="description" id="description">
            {{$store.state.description}}
        </div>
        <div class="form-control ">
            <label for="reminder">Mark as important</label>
            <input v-model="reminder" type="checkbox" class="form-control--check" id="reminder" name="reminder">
            {{$store.state.reminder}}
        </div>
        <input type="submit" class="btn btn--block" value='Save Item'>
    </form>
</template>

<script>
export default {
    name:'AddItem',
    computed:{
        text:{
            get(){
                return this.$store.state.text
            },
            set(newValue){
                this.$store.dispatch('setText',newValue)
            }
        },
        description:{
            get(){
                return this.$store.state.description
            },
            set(newValue){
                this.$store.dispatch('setDescription',newValue)
            }
        },
        reminder:{
            get(){
                return this.$store.state.reminder
            },
            set(newValue){
                this.$store.dispatch('setReminder',newValue)
            }
        }
    },
    methods:{
        onAdd(e){
            e.preventDefault();
            if(!this.text ){
                this.notValid = true
                alert('Item Name cannot be empty!!')
            }
            const newItem = {
                // id: Math.floor(Math.random()*1000),
                text: this.text,
                description: this.description,
                reminder: this.reminder
            }
            // dispatch an action 
            this.$store.dispatch('addItem',newItem)
        },
       
    },
    
}
</script>