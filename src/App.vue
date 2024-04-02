<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Paginator from './components/partials/Paginator.vue';
import Searchbar from './components/partials/Searchbar.vue';

export default {
  components:{
    Header,
    Main,
    Paginator,
    Searchbar
    
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi(){
      this.store.cardsList = [];
      // console.log('GET API');
      // console.log(this.store);
      //apiurl lo trovo su store.js
      axios.get(this.store.apiUrl, {
        // params:{
        //   num: 20, 
        //   offset: 0,   questi params li ho tolti da qui per metterli su store.js sotto il nome di queryParams DATO CHE SARANNO DATI CHE CAMBIANO
        // } 
        params: store.queryParams
      })
      .then(result=>{
        this.store.cardsList = result.data.results;
        this.store.pageInfo.pages = result.data.info.pages
        console.log(store.pageInfo.pages);
        console.log(this.store.cardsList);
      })
      .catch(error=>{
        console.log(error);
      })
    },
    getAllName(){
      axios.get(this.store.nameUrl)
      .then(res => {
        console.log(res.data);
        this.store.nameList = res.data.map (item => item.name);
        console.log(this.store.nameList);
      })
    }
  },
  mounted() {
    this.getApi(),
    this.getAllName()

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
  }
}

</script>

<template>
  <Searchbar/>
  <Header />
  <Main />
  <Paginator @prossimaPagina="getApi" />
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