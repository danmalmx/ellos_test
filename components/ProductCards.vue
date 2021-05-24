<template>
<div class="container" @products="$fetch">
  <div class="product-wrapper">
      <div v-for="items in products" :key="items.id">
        <div class="product-card">
          <div class="product-image">
            <img class="items-image" :src="`https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=${items.imageFront}`" alt="">
            <div class="labels">
              <ul class="labels-style" v-for="(labels, i) in items.labels" :key="labels[i]">
                <li><img :src="labels" alt=""></li>
              </ul>
            </div>
          </div>
          <div class="card-description">
            <h2 class="items-info"><span class="items-subbrand">{{items.subBrand}}</span>{{items.name}}</h2>
            <div v-if="items.currentPriceFmt < items.originalPriceFmt" class="items-price">
              <span class="items-current-price">{{items.currentPriceFmt}} SEK</span>
              <span class="items-original-price">{{items.originalPriceFmt}} SEK</span>
              <span  class="items-discount">{{items.priceDiscount}}%</span>
            </div>
            <div v-if="items.currentPriceFmt === items.originalPriceFmt" class="items-price">
              <span class="items-no-discount">{{items.currentPriceFmt}} SEK</span>
            </div>
            <div v-else-if="!items.currentPriceFmt || !items.originalPriceFmt || !items.priceDiscount">
              <span class="items-no-price">Item out-of-stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>

  export default {

    data () {
      return {
        products: []
      }
    },
    async fetch () {

      const getProducts = await fetch('https://www.ellos.se/api/articles?path=barn%2Fbabyklader-stl-50-92').then(res => res.json());
      const { getProductListPage } = getProducts.data
      this.products = getProductListPage.articles;
      this.$emit('products', this.products)
    }

  }
</script>

<style scoped>

  .container {
    display: flex;
    justify-content: b;
    /* width: 100%; */
    max-width: 85%;
    margin: 0 auto;
  }

  .product-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    border: 8px #FFF solid;
    background: #FFF;
    padding: .3rem;
    height: 450px;
  }

  .product-image {
    position: relative;
  }

  .card-decsripton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFF;
    width: 100%;
    margin-top: 10px;
    position: relative;
  }

  .items-image {
    max-height: 400px;
    max-width: 250px;
    transition: transform .2s;
    position: relative;
  }

 .labels {
    position: absolute;
    bottom: 1rem;
    left: 0;
  }

  .labels-style {
    list-style-type: none;
    margin-top: 5px;
    left: 0;
    padding: 0;
  }

  .items-subbrand {
    font-weight: 700;
    margin-right: 5px;
  }

  .items-info {
    font-weight: 350;
    font-size: 14px;
    max-width: 250px;
  }

  .items-price {
    margin: 5px 0;
    font-size: .8rem;
  }

  .items-price .items-original-price {
    font-size: .7rem;
    color: grey;
    text-decoration: line-through;
  }

  .items-price .items-current-price {
    font-weight: bold;
    color: #CD5158;
  }

  .items-price .items-discount {
    font-size: .7rem;
    font-weight: bold;
    color: #CD5158;
  }

  .items-price .items-no-discount {
    font-weight: bold;
  }
  .items-price .items-no-price {
    color: grey;

  }

  @media (max-width: 480px) {
    .product-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

    }
  }

</style>
