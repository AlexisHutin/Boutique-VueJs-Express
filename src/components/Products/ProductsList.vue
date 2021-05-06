<template>
  <div class="productsList">
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-3 py-2">
        <ProductCard :product='product'/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from "@/components/Products/ProductCard.vue";
import ProductsService from "@/services/Products.service";


export default {
  name: "ProductsList",
  components: {
      ProductCard
  },

  mounted() {
    ProductsService.getAll(this.$route.params.subCategory_id).then((res) => {
      if (res) {
        this.products = res;
      }
    });
  },
  data: function () {
    return {
      products: [],
    };
  },
};
</script>