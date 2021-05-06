<template>
  <div>
    <i
      class="bi-arrow-left btn btn-outline-primary"
      style="font-size: 1.5em"
      onclick="window.history.back();"
    ></i>
  </div>
</template>

<script>
export default {
  name: "BackBtn",

  data: function () {
    return {
      url: document.referrer,
    };
  },
};
</script>
