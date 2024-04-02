<script>
import Card from './partials/Card.vue';
import Loader from './partials/Loader.vue';
import {store} from '../data/store'
export default {
  components:{
    Card,
    Loader
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="text-center my-5 container">
    <Loader v-if=" this.store.cardsList.lenght === 0 " />
    <div v-else class="row row-cols-4">
      <Card 
      v-for=" card in this.store.cardsList" 
      :key="card.id" 
      :name="card.name"
      :status="card.status"
      :species="card.species"
      :image="card.image "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style >