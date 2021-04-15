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
import json from "../assets/datas.json";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductsList",
  components: {
      ProductCard
  },

  data: function () {
    return {
      products: json.categories
        .find((obj) => obj.id == this.$route.params.category_id)
        .sub_categories.find(
          (obj) => obj.id == this.$route.params.subCategory_id
        ).products,
    };
  },
};
</script>