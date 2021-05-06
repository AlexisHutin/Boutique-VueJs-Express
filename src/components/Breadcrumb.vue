<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="oui in link"
        :key="oui"
        class="breadcrumb-item active"
        aria-current="page"
      ></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>
