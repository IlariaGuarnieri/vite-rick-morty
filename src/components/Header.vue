<script>
import {store} from '../data/store'
export default {
  data() {
    return {
      store
    }
  },
  
}
</script>

<template>
  <div class="text-center my-5">
  <h1>{{store.mainTitle}}</h1>
    <input type="text" placeholder="Search Characters">
  </div>
</template>

<style lang="scss" scoped>

h1{
  color:rgb(43, 1, 43);
}
input{
  width: 300px;
}
</style>