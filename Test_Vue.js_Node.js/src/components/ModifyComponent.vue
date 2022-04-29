<template>
  <div>
    <br />
    <br />

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
      <label for="currence">Currence</label>
      <input type="text" v-model="article.currence" /><br />
      <br />
      <label for="brand">Brand</label>
      <input type="text" v-model="article.brand" /><br />
      <br />

      <span @click="$emit('delete', article.id)">
        <button class="btn btn-danger">
          <span class="material-icons"> Delete </span>
        </button>
      </span>

      <!-- <td>{{ article.id }}</td>

        <input v-model="article.title" type="text" id="title" />

        <td>{{ article.description }}</td>
        <label for="description">Description</label>
        <input type="text" id="description" />

        <label for="title">title</label>
        <input type="text" id="title" />

        <td>{{ article.price }}</td>
        <label for="title">title</label>
        <input type="text" id="title" />
        <td>{{ article.currence }}</td>
        <td>{{ article.brand }}</td> -->

      <br />
      <br />
    </table>
  </div>
</template>

<script>
export default {
  props: {
    article: Object, //{}
  },

};

</script>

<style scoped>
th {
  font-size: 18px;
}
</style>
