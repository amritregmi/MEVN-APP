<template>
    <div :class="['task', item.reminder ? 'task--shake' : '']">
        <h3>
            <span>{{item.text}}</span>
            <i class="fas fa-bell" @click="$emit('toggle-reminder',item.id)"></i>
            <i class="fas fa-times" @click="$emit('delete-item',item.id)"></i>
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