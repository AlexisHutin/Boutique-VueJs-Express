<template>
  <div class="categoriesList">
    <div
      v-for="category in categories"
      :key="category.id"
      class="d-grid gap-2 col-6 mx-auto"
    >
      <router-link
        :to="{
          name: 'Sub Categories',
          params: { category_id: category.id },
        }"
        class="btn btn-primary p-3 my-2"
        aria-current="page"
        >{{
          category.name.charAt(0).toUpperCase() + category.name.slice(1)
        }}</router-link
      >
    </div>
  </div>
</template>

<script>
// import json from "@/assets/datas.json";
import CategoriesService from "@/services/Categories.service";

export default {
  name: "Categories List",
  props: {
    type: String,
  },

  mounted() {
    CategoriesService.getAll().then((res) => {
      if (res) {
        this.categories = res;
      }
    });
  },
  data: function () {
    return {
      categories: [],
    };
  },
};
</script>

