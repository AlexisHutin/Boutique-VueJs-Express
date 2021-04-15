<template>
  <div class="card">
    <img src="@/assets/undraw_education_f8ru.svg"/>
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p>{{ product.description }}</p>
    </div>

    <div class="card-footer text-end">
      <router-link
        :to="{ name: 'Product View', params: { product_id: product.id } }"
        class="btn btn-small btn-primary p-2 my-2"
        aria-current="page"
      >
        Détails
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ProductsCard",
  props: {
      product: Object,
  },
  components: {},
};
</script>