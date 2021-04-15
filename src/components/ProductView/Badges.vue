<template>
  <div class="badges">
    <span class="badge rounded-pill bg-primary m-1">{{ course.type }}</span>
    <span class="badge rounded-pill bg-primary m-1">{{ course.difficulty }}</span>
    <span class="badge rounded-pill bg-primary m-1">{{ course.duration }}</span>
    <span v-if="course.is_promotion" class="badge rounded-pill bg-success m-1">En Promo !</span>
    <span v-if="course.is_obsolete" class="badge rounded-pill bg-warning text-dark m-1">
      Obsolète
    </span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Badges",
  components: {},
  props: {
      course: Object,
  }
};
</script>