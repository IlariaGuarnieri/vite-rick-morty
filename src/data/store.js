import { reactive } from 'vue'

export const store = reactive ({
  // qui ci metto le info globali (per ors)
  mainTitle: 'Vite Rick & Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: []
})