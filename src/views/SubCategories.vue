<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <SubCategoriesList type="untruc" />
        </div>
        <div class="col">
          <img alt="Vue logo" src="@/assets/logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SubCategoriesList from "@/components/SubCategories/SubCategoriesList.vue";

export default {
  name: "SubCategories",
  components: {
    SubCategoriesList,
  },
};
</script>