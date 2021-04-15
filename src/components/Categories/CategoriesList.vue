<template>
  <div class="categoriesList">
        <div v-for="category in categories" :key="category.id" class="d-grid gap-2 col-6 mx-auto">
          <router-link
            :to="{
              name: 'Sub Categories',
              params: { category_id: category.id },
            }"
            class="btn btn-primary p-2 my-2"
            aria-current="page"
            >{{ category.name }}</router-link
          >
        </div>
  </div>
</template>

<script>
import json from "@/assets/datas.json";

export default {
  name: "Categories List",
  props: {
    type: String,
  },
  data: function () {
    return {
      categories: json.categories,
    };
  },
};
</script>

