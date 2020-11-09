<template>
  <div>
    <carousel-3d width="1030" :display="3">
      <slide :index="0">
        <DrillDown />
      </slide>
      <slide :index="1">
        Slide 2 Content
      </slide>
      <slide :index="2">
        Slide 3 Content
      </slide>
      <slide :index="3">
        Slide 4 Content
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import DrillDown from '../charts/DrillDownChart.vue';
export default {
  components: {
    Carousel3d,
    Slide,
    DrillDown,
  },
};
</script>

<style></style>
