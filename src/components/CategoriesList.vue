<template>
  <div class="categoriesList">
    
    <ul class="nav flex-column align-items-end">
      <li v-for="category in categories" :key="category.id" class="nav-item">
        <router-link :to="{ name: 'Sub Categories', params: { category_id: category.id }}" class="btn btn-primary p-2 my-2" aria-current="page">{{ category.name }}</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import json from '../assets/datas.json'

export default {
  name: "Categories List",
  props: {
    type: String,
  },
  data: function () {
    return {
      categories: json.categories
    };
  },
};

</script>

