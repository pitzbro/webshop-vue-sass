<template>
  <section class="cards-container">
    <div class="card" @click="toggleSidebar">
      <div class="card-tag tag-text">Design</div>
      <img
        src="~@/assets/images/shutterstock_1154928898.jpg"
        alt=""
        class="card-image"
      />
      <div class="card-desc">Architectural and decorative lighting</div>
    </div>

    <div class="card">
      <div class="card-tag tag-text">Technic</div>
      <img src="~@/assets/images/Image_1.jpg" alt="" class="card-image" />
      <div class="card-desc">Technical and industrial lighting</div>
    </div>

    <div class="card">
      <div class="card-tag tag-text">Safety & control</div>
      <img src="~@/assets/images/safety_light.jpg" alt="" class="card-image" />
      <div class="card-desc">Safety lighting and control</div>
    </div>

    <div class="teaser teaser-end align-self-center">
      <img
        src="~@/assets/images/teaser_image_2.jpg"
        alt=""
        class="news-item-image"
      />
      <span class="item-name"
        >Brand: <mark>Foscarini </mark> | Model: Twiggy</span
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Cards",

  methods: {
    toggleSidebar() {
      document.body.classList.toggle("sidebar-open");
    },
  },
};
</script>
