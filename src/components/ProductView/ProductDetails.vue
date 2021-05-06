<template>
  <div class="productDetails">
    <div class="row py-3">
      <!-- Image -->
      <img src="@/assets/undraw_tutorial_video_vtd1.svg" height="600" />
    </div>
    <div class="row py-3">
      <!-- Price/Rate/Date -->
      <div class="col-4">
        <p class="h3">Price : {{ course.price }}</p>
      </div>
      <div class="col-4">
        <p class="h3">Rate : {{ course.rating }}/10</p>
      </div>
      <div class="col-4">
        <p class="h3">Date : {{ displayDate }}</p>
      </div>
    </div>
    <div class="row py-3">
      <!-- About the course -->
      <p style="text-align: justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis ut
        libero tincidunt sollicitudin. Sed accumsan tristique quam vel eleifend.
        Praesent scelerisque interdum molestie. Ut nec massa dignissim,
        sollicitudin arcu et, sollicitudin augue. Vestibulum id sagittis est.
        Aliquam erat volutpat. Donec posuere cursus nisl vitae euismod. Vivamus
        ullamcorper magna vitae ullamcorper gravida. Integer ut arcu malesuada,
        accumsan lectus et, ultricies magna. Quisque eleifend consectetur dolor,
        et lacinia nulla facilisis vitae. Phasellus fringilla suscipit nibh ut
        tempor. Nunc tincidunt ante augue, sit amet lacinia odio porta sed.
        Curabitur gravida mi ligula, et mollis orci cursus non.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ProductDetails",
  components: {},
  props: {
    course: Object,
  },
  computed: {
    displayDate: function () {
      return new Date(Date.parse(this.course.created)).toLocaleDateString(
        "fr-FR"
      );
    },
  },
};
</script>