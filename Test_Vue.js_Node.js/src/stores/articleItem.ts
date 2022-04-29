import { defineStore } from "pinia";


export const useStore = defineStore({
  id: "id",
  state: () => ({ 
    articles: [],
    // addressShipping: 'TOTO'
  }),
  getters: {

    getArticles: (state) => state.articles,

  },

  actions: {},
});
