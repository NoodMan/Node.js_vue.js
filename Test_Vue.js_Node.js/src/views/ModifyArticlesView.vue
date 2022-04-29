<template>
  <div class="about">
    <br />
    <h1>My modify page</h1>
    <ModifyComponent :article="article" />
    <!-- {{ afficher }} -->
  </div>
</template>

<script>
import ModifyComponent from "../components/ModifyComponent.vue";
import { useStore } from "../stores/articleItem";
import { mapWritableState } from "pinia";

export default {
  components: { ModifyComponent },

  mounted() {
    let article_id = this.$route.params.id;

    this.articles.forEach((element) => {
      console.log(element.id, article_id); 
      if (element.id == article_id) {
        this.article = element;
      }
    });
  },

  data() {
    //methode aui renvoi en objet
    return {
      // addressShipping: "Tutu",
      article: {},
    };
  },

  methods: {},

  computed: {
    // des fonctions qui sont utiliser comme des proprietes(variable)
    // afficher() {
    //   return "TOTO"
    // }
    // ...mapWritableState(useStore, {
    //   articles: 'articles',
    //    store_address : 'addressShipping'
    // })

    // ...mapWritableState(useStore, ["articles"],
    // ...mapWritableState(useStore, {
    //    store_address : 'addressShipping'
    // })

    ...mapWritableState(useStore, ["articles"]),
  },
};
</script>


<style>
h1 {
  text-align: center;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>