<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><i class="bi-book" style="font-size: 1.5em"></i
      ></router-link>
      <form class="d-flex">
        <router-link to="/buy" class="btn btn-outline-success mx-1" type="submit"
          ><i class="bi-cart" style="font-size: 1.5em"></i
        ></router-link>
        <router-link to="/sign-up" class="btn btn-outline-success mx-1" type="submit"
          ><i class="bi-box-arrow-in-right" style="font-size: 1.5em"></i
        ></router-link>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
