<template>
  <div class="subCategoriesList">
    <div
      v-for="subCategory in subCategories"
      :key="subCategory.id"
      class="d-grid gap-2 col-6 mx-auto"
    >
      <router-link
        :to="{
          name: 'Products',
          params: { subCategory_id: subCategory.id },
        }"
        class="btn btn-primary p-2 my-2"
        aria-current="page"
        >{{ subCategory.name }}</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import json from "@/assets/datas.json";

export default {
  name: "SubCategoriesList",
  components: {},

  data: function () {
    return {
      subCategories: json.categories.find(
        (obj) => obj.id == this.$route.params.category_id
      ).sub_categories,
    };
  },
};
</script>