<template>
  <div class="container">
    <ProductsList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "Products",
  components: {
    ProductsList,
  },
};
</script>