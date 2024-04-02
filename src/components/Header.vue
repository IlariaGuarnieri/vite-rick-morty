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
@import '../../src/assets/scss/partials/variables';
h1{
  color: $primary-color;
}
input{
  width: 300px;
}
</style>