<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <img alt="Vue logo" src="@/assets/logo.png" />
        </div>
        <div class="col">
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
