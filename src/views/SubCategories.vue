<template>
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <SubCategoriesList category_id="" />
        </div>
        <div class="col-8 text-center">
          <img
            alt="online learning"
            src="@/assets/undraw_studying_s3l7.svg"
            height="700"
          />
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