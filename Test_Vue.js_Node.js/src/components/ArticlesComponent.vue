<template>
  <div class="main">
    <br />
    <br />
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Price</th>
        <th>Currence</th>
        <th>Brand</th>
        <th>Action</th>
      </tr>

      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.id }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.price }}</td>
        <td>{{ article.currence }}</td>
        <td>{{ article.brand }}</td>
        <br />
        <router-link :to="{ name: 'modify', params: { id: article.id } }">
         
            <button class="btn btn-secondary">
              <span > Modify </span>
            </button>
          </router-link>
          
  <button class="btn btn-danger">
              <span > Delete</span>
            </button>
      
        <br />
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
};
</script>

<style scoped>
th {
  font-size: 18px;
}
</style>
