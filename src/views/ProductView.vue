<template>
  <div class="productView">
    <div class="container-fluid">
      <BackBtn />
      <div class="header">
        <div class="title d-flex flex-row align-items-end">
          <h1 class="display-3 m-0">{{ product.name }}</h1>
          <Badges :course="product" class="p-2" />
        </div>
        <hr />
      </div>

      <div class="row">
        <div class="col-8">
          <!-- COURSE -->
          <ProductDetails :course="product" />
          <router-link to="/buy" class="btn btn-success" type="submit"
            ><i class="bi-cart-plus" style="font-size: 2em"></i
          ></router-link>
        </div>
        <div class="col-4">
          <!-- AUTHOR -->
          <AuthorDetails :course="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductsService from "@/services/Products.service";

import ProductDetails from "@/components/ProductView/ProductDetails.vue";
import AuthorDetails from "@/components/ProductView/AuthorDetails.vue";
import Badges from "@/components/ProductView/Badges.vue";
import BackBtn from "@/components/BackBtn.vue";


export default {
  name: "ProductView",
  components: {
    ProductDetails,
    AuthorDetails,
    Badges,
    BackBtn
  },

  mounted() {
    ProductsService.getOne(this.$route.params.product_id).then((res) => {
      if (res) {
        this.product = res[0];
      }
    });
  },
  data: function () {
    return {
      product: {},
    };
  },
};
</script>