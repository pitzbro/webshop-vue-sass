<template>
  <header class="main-header full">
    <div v-html="logo" class="main-header-logo"></div>
    <nav class="main-header-nav">
      <ul class="main-nav">
        <li><a href="#">About us</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">Refernces</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <img src="~@/assets/images/header1920.jpg" alt="" class="main-header-image full">
    <div class="main-header-case">
      <span class="case-title">
      Museum of Modern Art Moma
      </span>
      <span class="case-city">New York</span>
      <a href="#" class="btn-link">Case study</a>
    </div>
    <div class="main-header-slide-info slide-info">
      <span class="slide-name">Light consulting & sales</span>
      <span class="slide-pager">1/5</span>
      <span class="slide-pager-arrows">
        <button class="pager next"></button>
        <button class="pager prev"></button>
      </span>
    </div>
  </header>
</template>

<script>

// COMPONENTS
import CatCard from '@/components/cats/cat-card.vue'
import { miscellaneous, logos } from "../services/svg.service";

export default {
  name: 'home',
  components: {
    },

  data: () => {
    return {
      logo: logos.logoFull,
    }
  },
}
</script>
