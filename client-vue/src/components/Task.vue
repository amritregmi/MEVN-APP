<template>
    <div :class="['task', task.reminder ? 'task--shake' : '']">
        <h3>
            <span>{{task.text}}</span>
            <i class="fas fa-bell" @click="$emit('toggle-reminder',task.id)"></i>
            <i class="fas fa-times" @click="$emit('delete-task',task.id)"></i>
        </h3>
        <p>{{task.description}}</p>
    </div>
</template>


<script>
export default {
    name:'Task',
    props:{
        task:Object
    },
}
</script>

<style scope>
  p{
      color: green !important;
      font-size: 1.5rem !important;
  }
  .fa-times{
      color: red;
      font-size: 1.8rem;
  }
  .fa-bell{
      color:chocolate;
      font-size: 1.8rem;
  }
</style>