<template>
  <main class="home card-grid site-block">
    <cat-card v-for="(cat, index) in 12" :tagNum="index" />
  </main>
</template>

<script>

// COMPONENTS
import CatCard from '@/components/cats/cat-card.vue'

export default {
  name: 'home',
  components: {
    CatCard
  }
}
</script>
