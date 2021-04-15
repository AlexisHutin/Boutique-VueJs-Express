<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 text-center">
          <img alt="online learning" src="@/assets/undraw_Online_learning_re_qw08.svg" height="700"/>
        </div>
        <div class="col-4">
          <CategoriesList type="untruc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoriesList from "@/components/Categories/CategoriesList.vue";

export default {
  name: "Home",
  components: {
    CategoriesList,
  },
};
</script>
