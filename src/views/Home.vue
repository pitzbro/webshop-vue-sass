<template>
  <section class="news-container">
    <span class="news-category">News</span>
    <div class="news-container">
      <h2 class="news-title">Lorem ipsum dolor sit amet</h2>
      <p class="news-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
    </div>
    <img src="~@/assets/images/news915.jpg" alt="" class="news-image">
    <div class="news-item item-container">
      <img src="~@/assets/images/pracht_light.jpg" alt="" class="news-item-image">
      <span class="item-name">Brand: <mark>Pracht </mark> | Model: Mirona</span>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import { miscellaneous, logos } from "../services/svg.service";

export default {
  name: "home",
  components: {},

  data: () => {
    return {
      logo: logos.logoFull,
    };
  },
};
</script>
