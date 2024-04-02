<script>
import {store} from '../data/store'
import axios from 'axios'
export default {
  data() {
    return {
      store
    };
  },
  
  // mounted(){
  //   axios.get('https://rickandmortyapi.com/api/character')
  //   .then(res => {
  //     res.data.result.forEach(item => {
  //       console.log(item.species);
  //       if(!store.status.includes(item.status)){
  //         store.status.push(item.status)
  //       }
  //     })
  //     console.log(store.status);
  //   })
  // }
}
</script>

<template>
  <div class="container text-center my-5">
  <h1>{{store.mainTitle}}</h1>
    <label for="exampleDataList" class="form-label">Ricerca per nome</label>
    <input class="form-control" list="datalistOptions" id="exampleDataList" v-model="searchTerm" placeholder="Cerca per nome">
    <datalist id="datalistOptions">
      <!-- <option value="Chicago"></option>
      <option value="Denver"></option>
      <option value="New York"></option>
      <option value="San Francisco"></option>
      <option value="Boston"></option> -->
      <option
      v-for="(name, index) in this.store.nameList" 
      :key="index"
      :value="name"
      > </option>
      
    </datalist>
  </div>
</template>

<style lang="scss" scoped >
@use '../../src/assets/scss/partials/variables';
@use '../assets/scss/main.scss';

// h1{
//   color: $primary-color;
// }

.input-drop{
  display: flex;
  margin-left: 350px;
  input{
    margin-right: 20px;
    width: 300px;
  }
  .dropdown{
    margin-left: 20px;
  }
}
</style>