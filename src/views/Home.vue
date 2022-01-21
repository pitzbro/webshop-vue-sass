<template>
  <header class="home card-grid site-block">
    <div v-html="logo"></div>
    <nav>
      <ul class="main-nav">
        <li><a href="#">About us</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">Refernces</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="case-nav">
      <span class="case-title">
      Museum of Modern Art Moma
      </span>
      New York
      <a href="#" class="btn-link">Case study</a>
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
