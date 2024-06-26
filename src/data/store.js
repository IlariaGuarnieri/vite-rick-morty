import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ora)
  mainTitle: '- Rick & Morty -',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl : 'https://rickandmortyapi.com/api/character/?name',
  cardsList: [],
  nameList: [],
  pageInfo:{
    counter :0,
    itemsPerPage: 20,
    pages: 0
  },
  queryParams: {
    num: 20, //array di 20 elementi
    offset: 0, //partendo da 0 = quindi vuol dire che sono a pagina 1
  },

})