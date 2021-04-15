<template>
  <div class="subCategoriesList">
    
    <ul class="nav flex-column align-items-start">
      <li v-for="subCategory in subCategories" :key="subCategory.id" class="nav-item">
        <router-link :to="{ name: 'Products', params: { subCategory_id: subCategory.id }}" class="btn btn-primary p-2 my-2" aria-current="page">{{ subCategory.name }}</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import json from '../assets/datas.json'

export default {
  name: "SubCategoriesList",
  components: {},

  data: function () {
    return {
      subCategories: json.categories.find(obj => obj.id == this.$route.params.category_id).sub_categories,
    };
  },
  
};
</script>