<template>
  <header :style="{backgroundImage: `url(${image})`}">
    <div class="overlay"></div>
        <h1>ellos</h1>
        <h2>{{text}}</h2>
        <nuxt-link to="/commerce" class="btn">Shoppa loss!</nuxt-link>
  </header>
</template>

<script>
import plushAnimals from "static/hang-out-1521445_1920.jpg";
export default {
  data() {
    return {
      image: plushAnimals,
      text: '',
      products: []
    }
  },
    async fetch () {

      const getProducts = await fetch('https://www.ellos.se/api/articles?path=barn%2Fbabyklader-stl-50-92').then(res => res.json());
      const { getProductListPage } = getProducts.data
      this.text = getProductListPage.category.pageDescription;
      this.products = getProductListPage.articles;
    }
}
</script>

<style>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  position: relative;
  background: no-repeat center center cover;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}

h1 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 3rem;
  font-weight: 300;
  font-size: 5rem;
  color: #fff;
}

h2 {
  position: absolute;
  color: #fff;
  width: 45%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  text-align: center;

}

.btn {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;
  background: #FFF;
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  width: 250px;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  transition: .5s;
  margin-top: 1rem;
}

.btn:hover {
  background: rgb(0, 92, 0);
  color: #FFF;
}

@media (max-height: 480px) {
  h2 {
    position: absolute;
    width: 60%
  }

  .btn {
    position: absolute;
    top: 60%;
  }
}

</style>>

