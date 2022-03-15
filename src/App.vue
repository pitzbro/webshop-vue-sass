<template>
  <div id="app" class="main-layout">
    <Sidebar />
    <Header />
    <News />
    <MainText />
    <Cards />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import News from "./components/News.vue";
import MainText from "./components/MainText.vue";
import Cards from "./components/Cards.vue";

export default {
  name: "App",

  components: {
    Sidebar,
    Header,
    News,
    MainText,
    Cards,
  },
};
</script>
