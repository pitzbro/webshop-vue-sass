<template>
  <section class="card-cat card">
    <h2 v-html="logo"></h2>
    <img class="cat-image" :src="`https://cataas.com/cat/${tags[tagNum]}`"/>
    <div class="cat-tag">{{tags[tagNum]}}</div>
  </section>
</template>

<script>

import { miscellaneous, logos } from "../../services/svg.service";
export default {

  name: 'CatCard',
  // props: ['tagNum'],
  props: {
    tagNum: Number
  },

  data: () => {
    return {
      search: miscellaneous.search,
      logo: logos.logoFull,
      catImage: null,
      tags: ['cute', 'fail', 'stupid', 'funny', 'serious', 'white', 'gif', 'happy', 'sleeping', 'grumpy', 'old', 'fat']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>