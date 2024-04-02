import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ors)
  mainTitle: '- Rick & Morty -',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  pageInfo:{
    counter :0,
    itemsPerPage: 20,
    pages: 0
  },
  queryParams: {
    num: 20, //array di 12 elementi
    offset: 0, //partendo da 0 = quindi vuol dire che sono a pagina 1
  },

})