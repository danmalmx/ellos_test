<template>
  <div>
    <h1>Commerce</h1>
    <h2 v-for="p in product">{{product.data.getProductListPage.articles}}</h2>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        product: []
      }
    },
    async fetch () {

      const x = await fetch('https://www.ellos.se/api/articles?path=barn%2Fbabyklader-stl-50-92').then(res => res.json());

      const { articles } = x.data.getProductListPage;
      console.log('articles', articles)

      // console.log('data', articles.map((p) => p.subBrand))
      this.product = x;

    }
  }
</script>
