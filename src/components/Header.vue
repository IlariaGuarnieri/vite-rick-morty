<script>
import {store} from '../data/store'
import axios from 'axios'
export default {
  data() {
    return {
      store
    }
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
  <div class="text-center my-5">
  <h1>{{store.mainTitle}}</h1>
  </div>
  <div class="input-drop">
    <input type="text" placeholder="Search Characters">
    <!-- dropdown -->
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        status
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
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