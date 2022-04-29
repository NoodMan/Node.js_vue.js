<template>
  <div class="about">
    <br />
    <h1>My article page</h1>
    <ArticlesComponent :articles="articles" />
  </div>
</template>

<script>
import ArticlesComponent from "../components/ArticlesComponent.vue";
import axios from "axios";
import { mapWritableState } from "pinia";
import { useStore } from "../stores/articleItem";

export default {
  components: { ArticlesComponent },
  mounted() {
    axios.get("http://127.0.0.1:90/articles").then((response) => {
      this.articles = response.data["articles"];
    });
  },
  computed: { ...mapWritableState(useStore, ["articles"]) },
  data() {
    return {};
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