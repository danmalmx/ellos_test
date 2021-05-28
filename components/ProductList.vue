<template>
  <div class="container">
    <div class="product-wrapper">
        <div v-for="product in products" :key="product.id">
          <ProductCards :product="product"/>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        products: []
      }
    },

    props: ['product'],

    async fetch () {

      const getProducts = await fetch('https://www.ellos.se/api/articles?path=barn%2Fbabyklader-stl-50-92').then(res => res.json());
      const { getProductListPage } = getProducts.data
      this.text = getProductListPage.category.pageDescription;
      this.products = getProductListPage.articles;
    },
  }
</script>

<style scoped>

  .container {
    display: flex;
    max-width: 85%;
    margin: 0 auto;
  }

  .product-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
    justify-content: center;
  }

  .product-wrapper::after {
    content: '';
    flex: auto;
    max-width: 550px;
  }

  @media (max-width: 480px) {
    .product-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

</style>
