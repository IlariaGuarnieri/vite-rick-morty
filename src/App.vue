<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  components:{
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi(){
      // console.log('GET API');
      // console.log(this.store);
      axios.get(this.store.apiUrl, {
        params:{
          num: 20,
          offset: 0,
          language:'it'
        }
      })
      .then(result=>{
        this.store.cardsList = result.data.results;
        console.log(this.store.cardsList);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi()
  }
}

</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss" >
@use '../src/assets/scss/main.scss';
@import '../src/assets/scss/partials/variables';
body{
  background-color:rgb(225, 129, 225);
  color: $primary-color;
  min-height: 100vh;
  // background-image: linear-gradient(
  //   lighten (rgb(71, 5, 71), 80%),
  //   lighten (rgb(71, 5, 71), 60%)
  // );
}
</style>