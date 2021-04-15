<template>
  <div class="productView">
    <div class="container-fluid">
      <Badges :course="product" />
      <div class="row">
        <div class="col-8">
          <!-- COURSE -->
          <ProductDetails :course="product" />
          <router-link to="/buy" class="btn btn-success" type="submit"><i class="bi-cart-plus" style="font-size:2em"></i></router-link>
        </div>
        <div class="col-4">
          <!-- AUTHOR -->
          <AuthorDetails />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import json from "@/assets/datas.json";

import ProductDetails from "@/components/ProductView/ProductDetails.vue";
import AuthorDetails from "@/components/ProductView/AuthorDetails.vue";
import Badges from "@/components/ProductView/Badges.vue";

export default {
  name: "ProductView",
  components: {
    ProductDetails,
    AuthorDetails,
    Badges,
  },

  data: function () {
    return {
      product: json.categories
        .find((obj) => obj.id == this.$route.params.category_id)
        .sub_categories.find(
          (obj) => obj.id == this.$route.params.subCategory_id
        )
        .products.find((obj) => obj.id == this.$route.params.product_id),
    };
  },
};
</script>