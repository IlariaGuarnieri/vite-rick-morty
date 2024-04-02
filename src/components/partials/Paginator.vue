<script>
import  { store } from '../../data/store'
export default {
  data(){
    return{
      store
    }
  },
  methods:{
    nextPage(){
      store.pageInfo.counter++;
      store.queryParams.offset = store.pageInfo.itemsPerPage * store.pageInfo.counter;
      console.log(store.queryParams);
      this.$emit('prossimaPagina')
    },
    prevPage(){
      store.pageInfo.counter --;
    }
  }
}
</script>

<template>
  <div class="text-center my-5">
    pagina {{ store.pageInfo.counter +1 }} di {{ store.pageInfo.pages }} 
    <button @click="prevPage" v-if="store.pageInfo.counter > 0" class="btn btn-success mx-3"> < </button> 
    <button @click="nextPage" v-if="store.pageInfo.counter + 1 < store.pageInfo.pages" class="btn btn-success">></button>
  </div>
</template>

<style lang="scss" >

</style>