<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/buy">Cart</router-link>
  </div> -->

  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"><i data-feather="book-open"></i></router-link>
      <form class="d-flex">
        <router-link to="/buy" class="btn btn-outline-success" type="submit"><i data-feather="shopping-cart"></i></router-link>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
