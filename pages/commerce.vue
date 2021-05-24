<template>
<div>
  <Products :products="products"/>
  </div>
</template>

<script>
import Products from '../components/ProductCards'

  export default {
    components: {
      Products
    },
    props: ['products']

  }
</script>
