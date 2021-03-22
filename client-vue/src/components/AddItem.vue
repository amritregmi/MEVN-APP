<template>
    <form class="add-form" @submit="onAdd">
        <div class="form-control">
            <label for="task">Item Name</label>
            <input v-model="text" type="text" placeholder="Add item" name="text" id="task">
            <!-- <span v-show= "notValid" class="message--red"> !! Item cannot be empty</span> -->
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <input v-model="description" type="text" placeholder="Desc" name="description" id="description">
        </div>
        <div class="form-control ">
            <label for="reminder">Mark as important</label>
            <input v-model="reminder" type="checkbox" class="form-control--check" id="reminder" name="reminder">
        </div>
        <input type="submit" class="btn btn--block" value='Save Item'>
    </form>
</template>

<script>
export default {
    name:'AddItem',
    data(){
        return {
            text:'',
            description:'',
            reminder: false,
            notValid: false,
        }
    },
    methods:{
        onAdd(e){
            e.preventDefault();
            if(!this.text ){
                this.notValid = true
                return
            }
            const newItem = {
                // id: Math.floor(Math.random()*1000),
                text: this.text,
                description: this.description,
                reminder: this.reminder
            }
            this.$emit('add-item',newItem)
        },
        
    },
    component:{

    }
}
</script>