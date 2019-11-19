<template>
  <section class="card-cat card">
    <img class="cat-image" :src="`https://cataas.com/cat/${tags[tagNum]}`"/>
    <div class="cat-tag">{{tags[tagNum]}}</div>
  </section>
</template>

<script>
export default {

  name: 'CatCard',
  // props: ['tagNum'],
  props: {
    tagNum: Number
  },

  data: () => {
    return {
      catImage: null,
      tags: ['cute', 'fail', 'stupid', 'funny', 'serious', 'white', 'gif', 'happy', 'sleeping', 'grumpy', 'old', 'fat']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
