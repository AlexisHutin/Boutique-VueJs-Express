<template>
  <div class="container-fluid">
    <BackBtn />
    <ProductsList />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductsList from "@/components/Products/ProductsList.vue";
import BackBtn from "@/components/BackBtn.vue";

export default {
  name: "Products",
  components: {
    ProductsList,
    BackBtn
  },
};
</script>