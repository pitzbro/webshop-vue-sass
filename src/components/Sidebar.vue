<template>
  <section class="sidebar full" aria-labelledby="sidebar-title">
    <button class="btn btn-close-sidebar" @click="toggleSidebar">x</button>
    <h3 id="sidebar-title">Architectural and decorative lighting</h3>
    <div class="sidebar-tag tag-text">Design</div>
    <img
      src="~@/assets/images/shutterstock_1154928898.jpg"
      alt=""
      class="sidebar-image"
    />
    <p class="sidebar-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eaque sint
      architecto omnis rerum. Fugiat, quaerat nisi quia reprehenderit architecto
      ullam eum ratione aliquid harum ea exercitationem necessitatibus
      blanditiis doloremque.
    </p>
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
