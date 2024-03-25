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
    <button @click="store.counter++" class="btn btn-primary mb-5"> incrementa contatore</button>
    <input class="form-control" type="text" v-model="store.mainTitle">
  </div>
</template>

<style lang="scss" scoped>
</style>