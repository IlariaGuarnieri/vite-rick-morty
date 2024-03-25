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
      console.log('GET API');
      console.log(this.store);
      axios.get(this.store.apiUrl, {
        params:{
          num: 10,
          offset: 0,
          language:'it'
        }
      }).then(result=>{
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

<style lang="scss" scoped>
@use '../src/assets/scss/main.scss';
</style>