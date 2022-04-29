<template>
  <div>
    <br />
    <br />
    <form @submit.prevent="checkForm">
    <table>
      <label for="title">Title</label>
      <input type="text" v-model="article.title" /><br />
      <br />
      <label for="description">Description</label>
      <input type="text" v-model="article.description" /><br />
      <br />
      <label for="price">Price</label>
      <input type="text" v-model="article.price" />
      <br />
      <br />
      <label for="currency">Currency</label>
      <input type="text" v-model="article.currency" /><br />
      <br />
      <label for="brand">Brand</label>
      <input type="text" v-model="article.brand" /><br />
      <br />

     <button class="btn btn-secondary">
              <span> Validate</span>
            </button>

      <br />
      <br />
    </table>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    article: Object, //{}
  },

  methods: {
    checkForm() {
      axios.post("http://127.0.0.1:90/modify", this.article).then(response => response.data)
    }

  }

};

</script>

<style scoped>
th {
  font-size: 18px;
}
</style>
