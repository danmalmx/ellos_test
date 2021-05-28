<template>
  <div class="product-card">
    <div class="product-image">
      <img class="items-image" :src="`https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$el$&n=${product.imageFront}`" alt="">
      <div class="labels">
        <ul class="labels-style" v-for="(labels, i) in product.labels" :key="labels[i]">
          <li><img :src="labels" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="card-description">
      <h2 class="items-info"><span class="items-subbrand">{{product.subBrand}}</span>{{product.name}}</h2>
      <div v-if="product.currentPriceFmt < product.originalPriceFmt" class="items-price">
        <span class="items-current-price">{{product.currentPriceFmt}} SEK</span>
        <span class="items-original-price">{{product.originalPriceFmt}} SEK</span>
        <span  class="items-discount">{{product.priceDiscount}}%</span>
      </div>
      <div v-if="product.currentPriceFmt === product.originalPriceFmt" class="items-price">
        <span class="items-no-discount">{{product.currentPriceFmt}} SEK</span>
      </div>
      <div v-else-if="!product.currentPriceFmt || !product.originalPriceFmt || !product.priceDiscount">
        <span class="items-no-price">Item out-of-stock</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['product']
}
</script>

<style scoped>
  .product-card {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    border: 8px #FFF solid;
    background: #FFF;
    padding: .3rem;
    max-height: 450px;
    transition: all 0.2s ease;
  }

  .product-image {
    position: relative;
    max-height: 400px;
    max-width: 250px;

  }

  .card-decsripton {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #FFF;
    width: 100%;
    margin-top: 10px;
    position: relative;
  }

  .items-image {
    transition: transform .2s;
    width: 100%;
    position: relative;
  }
  .product-card:hover  .items-image{
    transform: scale(1.7) translateY(20%);
    z-index: 5;
    transition: all 0.2s ease;
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
    .items-image {
      max-height: 350px;
      max-width: 200px;
    }
  }


</style>
