<template>
    <form class="add-form" @submit="onAdd">
        <div class="form-control">
            <label for="task">Item Name</label>
            <input v-model="text" type="text" placeholder="Add item" name="text" id="task">
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
    name:'AddTask',
    data(){
        return {
            text:'',
            description:'',
            reminder: false
        }
    },
    methods:{
        onAdd(e){
            e.preventDefault();
            if(!this.text ){
                alert('please add a task')
                return
            }
            const newItem = {
                id: Math.floor(Math.random()*1000),
                text: this.text,
                description: this.description,
                reminder: this.reminder
            }
            this.$emit('add-item',newItem)
        }
    },
    component:{

    }
}
</script>