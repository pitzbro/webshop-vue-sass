<template>
  <header class="main-header full">
    <div v-html="logo" class="main-header-logo"></div>
    <nav class="main-header-nav">
      <ul class="main-nav clean-list flex">
        <li><a href="#">About us</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">References</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <a href="#" class="lang-switch">en</a>
      <button class="main-header-search" v-html="search"></button>
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
      <span class="slide-name vertical-text">Light consulting & sales</span>
      <span class="slide-pager vertical-text">1/5</span>
      <span class="slide-pager-controler">
        <button class="pager prev" v-html="arrowLeft"></button>
        <button class="pager next" v-html="arrowRight"></button>
      </span>
    </div>
  </header>
</template>

<script>

// COMPONENTS
import { miscellaneous, logos } from "../services/svg.service";

export default {
  name: 'home',
  components: {
    },

  data: () => {
    return {
      logo: logos.logoFull,
      search: miscellaneous.search,
      arrowRight: miscellaneous.arrowRight,
      arrowLeft: miscellaneous.arrowLeft,
    }
  },
}
</script>
