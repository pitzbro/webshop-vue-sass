<template>
  <section class="news-container">
    <h2 class="news-category">News</h2>
    <div class="news">
      <h3 class="news-title">Lorem ipsum dolor sit amet</h3>
      <p class="news-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <button class="btn">Read more</button>
      <div class="pager news-pager">
        <ul class="clean-list flex">
          <li class="active">1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>

    <img src="~@/assets/images/news915.jpg" alt="" class="news-image" />

    <div class="teaser teaser-start">
      <img
        src="~@/assets/images/pracht_light.png"
        alt=""
        class="news-item-image"
      />
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
